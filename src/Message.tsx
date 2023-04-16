interface MessageProp {
  msg: string;
}
function Message({ msg }: MessageProp) {
  let count = 0;
  count++;
  const name = "Michelle";
  if (name)
    return (
      <>
        <h1> Message {count}</h1>
      </>
    );

  return <h1>Hello World</h1>;
}

export default Message;
