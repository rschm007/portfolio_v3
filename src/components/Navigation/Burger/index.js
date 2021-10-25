const Burger = ({ open, setOpen }) => {
    return (
      <button
        className={`menuButton`}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <span />
      </button>
    );
  };
  
  export default Burger;