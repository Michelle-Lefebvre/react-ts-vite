interface MessageProp {
  msg: string;
}

let count = 0;

function Message({ msg }: MessageProp) {
  console.log("Message called", count);
  count++;

  const name = "Michelle";

  if (name)
    return (
      <>
        <h1>
          {" "}
          Message: {name} {msg} {count}
        </h1>
      </>
    );

  return <h1>Hello World</h1>;
}

export default Message;
