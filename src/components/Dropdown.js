function Dropdown(props) {
  return (
    <div class="input-group">
      <span class="input-group-text">
        <i class="fa-solid fa-list-ul"></i>
      </span>
      <select
        id="category"
        class="form-select"
        value={props.value}
        onChange={props.onChange}
      >
        <option value="default">Choose category</option>
        <br />
        <option value="Makeup Products">Makeup Products</option>
        <br />
        <option value="Home Products">Home products</option>
        <br />
        <option value="Other">Other</option>
        <br />
      </select>
    </div>
  );
}

export default Dropdown;
