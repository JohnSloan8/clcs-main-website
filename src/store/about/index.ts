import { atom, useRecoilState } from 'recoil';

const aboutState = atom({
  key: 'aboutState',
  default: [],
});

function useAbout() {
  const [about, setAbout] = useRecoilState(aboutState);
  return { about, setAbout };
}

export { useAbout };
