import { useState, type CSSProperties } from "react";

type ItemProps = {
  clickAdd: () => void;
  clickRemove: (id: number) => void;
  clickPlus: (amt: number) => void;
  clickMinus: (amt: number) => void;
  id: number;
  removeBtnDisabled: boolean;
};

const Item = ({
  clickMinus,
  clickPlus,
  clickAdd,
  clickRemove,
  id,
  removeBtnDisabled,
}: ItemProps) => {
  const [count, setCount] = useState<number>(0);

  const handleClickPlus = () => {
    clickPlus(1);
    setCount((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    setCount((prev) => {
      const value = prev - 1;
      return value <= 0 ? 0 : value;
    });
    clickMinus(1);
  };

  const handleClickAdd = () => {
    clickAdd();
  };

  const handleClickRemove = () => {
    clickMinus(count);
    clickRemove(id);
  };

  return (
    <>
      <div style={styles.container}>
        <button
          style={styles.plusAdd}
          onClick={handleClickMinus}
          disabled={count < 1}
        >
          -
        </button>
        {count}
        <button style={styles.plusAdd} onClick={handleClickPlus}>
          +
        </button>
        <button style={styles.add} onClick={handleClickAdd}>
          Add
        </button>
        <button
          style={styles.remove}
          onClick={handleClickRemove}
          disabled={removeBtnDisabled}
        >
          Remove
        </button>
      </div>
    </>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center",
    marginTop: "10px",
  },
  add: {
    backgroundColor: "green",
    color: "#fff",
  },
  remove: {
    backgroundColor: "red",
    color: "#fff",
  },
  title: {
    marginBottom: "20px",
  },
  plusAdd: {
    backgroundColor: "white",
    color: "black",
  },
};

export default Item;
