const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Name</label>
          <input type="text" placeholder="Enter product name" />
        </div>
        <div className="newProductItem">
          <label>Stock</label>
          <input type="text" placeholder="items in stock" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <div className="newProductActive">
            <input type="radio" name="active" id="yes" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="active" id="no" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="newProductItem">
          <label>In Stock</label>
          <select className="newProductSelect" name="inStock" id="inStock">
            <option value="yes">Hell Yeah</option>
            <option value="no">Hell Nahh</option>
          </select>
        </div>
        <div className="newProductItem">
          <label>Product Image</label>
          <input type="file" />
        </div>
      </form>
      <button className="newProductButton">Create</button>
    </div>
  );
};

export default NewProduct;
