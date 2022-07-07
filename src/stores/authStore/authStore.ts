import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { type User } from '../../models/User/User';
import { LoginRequest } from '../../requests';
import { RegisterUserRequest } from '../../requests/RegisterUserRequest';
import ClotheslinesApiService from '../../services/clotheslinesApiService/clothesLinesApiService';
import { ApiResponse, FetchingStatus } from '../../types';

export class AuthStore {
  user: User = null!;
  status: FetchingStatus = 'idle';
  isLoggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {
    this.user = null!;
    this.status = 'idle';
  }

  get isAuthenticated(): boolean {
    return this.user != null && this.isLoggedIn;
  }

  setUser(user: User): void {
    this.user = user;
  }

  setStatus(status: FetchingStatus): void {
    this.status = status;
  }

  setIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  async register(payload: RegisterUserRequest) {
    try {
      this.setStatus('fetching');

      const res: ApiResponse<{ user: User }> = await api().auth.register(
        payload,
      );

      if (res && res.status === 200) {
        await this.login({
          email: payload.user.email,
          password: payload.user.password,
        });

        this.setStatus('success');

        return res;
      }
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  }

  async login(payload: LoginRequest) {
    try {
      this.setStatus('fetching');

      const res: ApiResponse<{ user: User }> = await api().auth.login(payload);

      if (res && res.status === 200) {
        this.setUser(res.data.user);

        this.storeIsLoggedIn(true);

        this.setStatus('success');
      }
      return res;
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  }

  async logout() {
    try {
      this.setStatus('fetching');
      const res = await api().auth.logout();

      if (res && res.status === 200) {
        this.setUser(null!);

        this.storeIsLoggedIn(false);

        this.setStatus('success');

        return res;
      }
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  }

  async me() {
    try {
      this.setStatus('fetching');

      const res: ApiResponse<{ user: User }> = await api().auth.me();

      if (res && res.status === 200) {
        this.setStatus('success');

        return res;
      }
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  }

  async fetchUser() {
    try {
      this.setStatus('idle');
      const res: ApiResponse<{ user: User }> = await this.me();

      if (res && res.status === 200) {
        this.setUser(res.data.user);

        this.setStatus('success');
      }
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  }

  storeIsLoggedIn(value: boolean) {
    localStorage.setItem('auth', JSON.stringify(value));
    this.setIsLoggedIn(value);
  }

  fetchIsLoggedIn() {
    const isLoggedIn = localStorage.getItem('auth') || 'false';

    this.setIsLoggedIn(JSON.parse(isLoggedIn));
  }

  interceptError401() {
    const api = ClotheslinesApiService.getInstance().axiosAPI;

    if (!api) return;

    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.setUser(null!);
          return error;
        }
      },
    );
  }
}

export default new AuthStore();
