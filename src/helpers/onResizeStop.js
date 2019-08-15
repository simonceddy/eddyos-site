export const handleResize = () => {

};

export default function onResizeStop(setSize, e, dir, ref, delta) {
  // TODO set pos when resized from top or left
  console.log(delta);
  setSize({
    width: Number.parseInt(ref.style.width, 0),
    height: Number.parseInt(ref.style.height, 0)
  });
}
