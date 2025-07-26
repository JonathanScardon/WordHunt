import {Wrapper, Dot} from "./LoadingStyles";

function Loading() {
  return (
    <Wrapper>
      loading
      <Dot $delay={0}>.</Dot>
      <Dot $delay={0.2}>.</Dot>
      <Dot $delay={0.4}>.</Dot>
    </Wrapper>
  );
}

export default Loading;
