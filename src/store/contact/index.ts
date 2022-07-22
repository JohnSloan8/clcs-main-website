import { atom, useRecoilState } from 'recoil';

const contactedState = atom({
  key: 'contactedState',
  default: false,
});

function useContacted() {
  const [contacted, setContacted] = useRecoilState(contactedState);
  return { contacted, setContacted };
}

const conReqState = atom({
  key: 'conReqState',
  default: false,
});

function useConReq() {
  const [conReq, setConReq] = useRecoilState(conReqState);
  return { conReq, setConReq };
}

export { useContacted, useConReq };
