function Produit({ title, price, image, nbrPanierHandler }) {
  function btnAdd() {
    nbrPanierHandler();
  }

  return (
    <div className="produit">
      <img src={"./images/" + image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => btnAdd()}>Ajouter au panier</button>
    </div>
  );
}
export default Produit;
