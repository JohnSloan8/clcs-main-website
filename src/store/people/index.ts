import { atom, useRecoilState } from 'recoil';

const peopleState = atom({
  key: 'peopleState',
  default: [],
});

function usePeople() {
  const [people, setPeople] = useRecoilState(peopleState);
  return { people, setPeople };
}

export { usePeople };
