
const SortBar = ({ onSort }) => {
    return (
      <div className="sort-bar">
  
        <button onClick={() => onSort('health')}>Sort by Health</button>
        <button onClick={() => onSort('damage')}>Sort by Damage</button>
      </div>
    );
  };
  
  export default SortBar;
  