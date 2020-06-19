/* eslint-disable no-unused-vars */
export default function rndHelper(setSize, setPos) {
  const handleResize = () => {
    console.log(setSize, setPos);
  };

  const onResizeStop = (e, dir, ref, delta) => {
    // TODO set pos when resized from top or left
    // console.log(delta);
    setSize({
      width: Number.parseInt(ref.style.width, 0),
      height: Number.parseInt(ref.style.height, 0)
    });
  };

  const onDragStop = (e, data) => {
    // console.log(data);
    setPos({ x: data.x, y: data.y });
  };

  return {
    handleResize,
    onResizeStop,
    onDragStop
  };
}
