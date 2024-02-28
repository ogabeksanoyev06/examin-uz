import { access_token } from '~/services/tokenService';

export default function useAuth() {
  const token = access_token;
  const isLoggedIn = () => {
    return !!token.value;
  };
  return { isLoggedIn };
}
