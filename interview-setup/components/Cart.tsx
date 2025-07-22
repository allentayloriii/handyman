import { useCallback, useState, type CSSProperties } from "react";
import Item from "./Item";

const Cart = () => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [items, setItems] = useState<{ id: number }[]>([{ id: 1 }]);

  const increaseTotalCount = useCallback(
    (amt: number) => {
      setTotalCount((prev) => prev + amt);
    },
    [setTotalCount]
  );

  const decreaseTotalCount = useCallback(
    (amt: number) => {
      setTotalCount((prev) => {
        const value = prev - amt;
        return value < 0 ? 0 : value;
      });
    },
    [setTotalCount]
  );

  const addToItems = useCallback(() => {
    setItems((prevItems) => {
      const lastId = prevItems[prevItems.length - 1].id;
      return [...prevItems, { id: lastId + 1 }];
    });
  }, [setItems]);

  const removeFromItems = useCallback(
    (id: number) => {
      // if (items.length <= 1) return;
      setItems((prevItems) => [...prevItems.filter((item) => item.id !== id)]);
    },
    [setItems]
  );

  return (
    <>
      <div>
        <div>Total Count: {totalCount}</div>
        <div style={styles.listContainer}>
          {items.map(({ id }) => (
            <Item
              key={id}
              id={id}
              clickPlus={increaseTotalCount}
              clickMinus={decreaseTotalCount}
              clickAdd={addToItems}
              clickRemove={removeFromItems}
              removeBtnDisabled={items.length <= 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const styles: { [key: string]: CSSProperties } = {
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
};

export default Cart;
