function Card(props) {
    return (
        // JSX
        <li className="product_item">
            <a href="#">
                <figure className=" product_figure">
                    <div className=" product_item__head">
                        <div className=" gallery_counter">
                            <span className=" gallery_counter__value">1</span>
                        </div>
                        <div className=" product_item__image">
                            <img src="img/default.png" alt=""/>
                         </div>
                        <span className=" product_item__location">{props.city}</span>
                        <div className="product_item__favorite " title="">
                            <div className="product_item__favorite_wrap">
                                <i className="icon icon--favorite"></i>
                                <span className=" tooltip tooltip_favorite">
                                    <span className=" tooltip_text">Добавить&nbsp;в&nbsp;избранное</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <figcaption className=" product_item__content">
                        <div className=" product_item__payment">
                            <div className=" product_item__description">{props.price}&nbsp;
                                <span className=" rub">₽</span>
                            </div>
                            <div className="payment_options_container">
                                <i className="icon icon--delivery"></i>
                                <i className="icon icon--deal"></i>
                            </div>
                        </div>
                        <div className=" product_item__title">{props.name}</div>
                    </figcaption>
                </figure>
                <div className="more_info">
                    <button className="" type="button">
                        <span>Подробнее</span>
                    </button>
                </div>
            </a>
        </li>
    );
}

var app = (
    <div>
        <div className="container">
            <h1>Cards</h1>
            <section className="product">
                <ul className="product_list">
                    <Card city="Москва" price="10 000" name="Название товара"/>
                </ul>
            </section>
        </div>
    </div>
);

// JS normal querySelector
ReactDOM.render(app, document.querySelector('#root'));