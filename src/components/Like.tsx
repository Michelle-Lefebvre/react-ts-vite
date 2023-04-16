import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  return (
    <>
      {like === false ? (
        <AiOutlineHeart color="deeppink" size={80} onClick={toggle} />
      ) : (
        <AiTwotoneHeart color="deeppink" size={80} onClick={toggle} />
      )}
    </>
  );
}

export default Like;
