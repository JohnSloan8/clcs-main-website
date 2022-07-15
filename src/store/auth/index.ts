import { atom, useRecoilState } from 'recoil';

const authState = atom({
  key: 'authState',
  default: false,
});

function useAuth() {
  const [auth, setAuth] = useRecoilState(authState);
  return { auth, setAuth };
}

const registeredState = atom({
  key: 'registeredState',
  default: false,
});

function useRegistered() {
  const [registered, setRegistered] = useRecoilState(registeredState);
  return { registered, setRegistered };
}

const regReqState = atom({
  key: 'regReqState',
  default: false,
});

function useRegReq() {
  const [regReq, setRegReq] = useRecoilState(regReqState);
  return { regReq, setRegReq };
}

export { useAuth, useRegistered, useRegReq };
