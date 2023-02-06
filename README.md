- [] useTitle
- [] useInput
- [] usePageLeave
- [] useClick
- [] useFadeIn
- [] useFullscreen
- [] useHover
- [] useNetwork
- [] useNotification
- [] useScroll
- [] useTabs
- [] usePreventLeave
- [] useConfirm
- [] useAxios



{ placeholder, value, onChange } {...name} => placeholder : placeholder(=스트링형태), value : value(=스트링형태), onChange : onChange(=함수형태)

주함수바깥 hook 에서 필요한 것을 return 해서 주 함수에서 쓴다.

useEffect( 함수명 혹은 함수 선언, ) : 오른쪽이 비었으면 렌더링될때마다 실행, []일 때 최초한번실행, 배열안에 값있으면 값이 변할 때마다 실행

--> 주 함수 밖 hook에 useEffect사용시 hook 함수가 끝나면 useEffect가 없어짐
