function Produit({ title, price, image }) {
  return (
    <div className="produit">
      <img src={"./images/" + image} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}
export default Produit;
