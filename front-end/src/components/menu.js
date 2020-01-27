import React, { Component } from "react";
import { MdRestaurantMenu } from "react-icons/md";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appetizer: true,
      sandwiches: false,
      entrees: false,
      pasta: false,
      salad: false

    }
  }

  handleSandwich = (e) => {
    this.setState({
      sandwiches: true,
      appetizer: false,
      entrees: false,
      pasta: false,
      salad: false
    })
  }
  handlePasta = (e) => {
    this.setState({
      sandwiches: false,
      appetizer: false,
      entrees: false,
      pasta: true,
      salad: false
    })
  }
  handleApp = (e) => {
    this.setState({
      sandwiches: false,
      appetizer: true,
      entrees: false,
      pasta: false,
      salad: false
    })
  }
  handleEntree = (e) => {
    this.setState({
      sandwiches: false,
      appetizer: false,
      entrees: true,
      pasta: false,
      salad: false
    })
  }

  handleSalad = (e) => {
    this.setState({
      sandwiches: false,
      appetizer: false,
      entrees: false,
      pasta: false,
      salad: true
    })
  }



  render() {
    return (
      <div>
        <div className="menuBanner">
          <div className="rectangle" id="rec1"> </div> <p className="menu">Menu <MdRestaurantMenu /> </p>  <div className="rectangle"></div> <br />

        </div>
        {/* <p className="oval">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p> */}
        <div className="menuSwitch">
          <div className="buttons">
            <button className="buttons1" onClick={this.handleApp}>Appetizers</button>
            <button className="buttons1" onClick={this.handleSandwich}>Sandwiches</button>
            <button className="buttons1" onClick={this.handleEntree}>Entrees</button>
            <button className="buttons1" onClick={this.handlePasta}>Pasta</button>
            <button className="buttons1" onClick={this.handleSalad}>Salad</button>
          </div>
          <div className="somespace">
          </div>
          <div className="menus">
            {this.state.appetizer === true ?
              <div className="app">
                {/* <p>Appetizers</p> */}
                <p> <span5>Soup Of The Day $6.00 </span5> </p>
                <p> <span5>Assorted Cheese Plate $9.00 </span5> <br /> w/ mesclun salad, dry apricot, and walnuts</p>
                <p> <span5>Apple Wood Smoked Duck Carpaccio  $8.50 </span5> <br /> w/ endive, pear, blue cheese and valnut vinaigrette </p>
                <p><span5>Escargot In The Shell $7.00 </span5> <br /> with roasted garlic parsley butter sauce</p>
                <p><span5>Fried Calamari $8.00 </span5> <br /> w/ carry soy dipping aioli and mixed vegetable sesame seed salad</p>
              </div>
              :
              <p></p>
            }

            {this.state.pasta === true ?
              <div className="pasta">
                {/* <p>Pasta</p> */}
                <p> <span5>Penne  $9.00 </span5> <br /> w/ tomato and fresh basil sauce and shaved mozzarella</p>
                <p> <span5>Fresh Spinach And Ricotta Ravioli  $10.00 </span5> <br /> w/ sage and butter sauce</p>
                <p><span5>Fresh Cheese Tortellini  $10.50 </span5> <br /> with mushroom truffle cream sauce and shaved asiago cheese</p>

              </div>
              :

              <p></p>}

            {this.state.sandwiches === true ?
              <div className="sandwich">
                {/* <p>Sandwiches</p> */}
                <p> <span5>Pressed Vegetable $8.00 </span5> <br /> w/ rent portobello mushroom, eggplant, caramelized onions, zucchini, red peppers and basil pesto on ciabatta bread (w/ goat cheese 1.00 extra) </p>
                <p><span5>Bagel  $7.00 </span5> <br /> w/ house cured salmon gravlox, cream cheese and onion </p>
                <p><span5>Grilled Chicken Sandwich $8.50 </span5>  <br /> w/ avocado, arugola, asiago cheese, and roasted tomato vinaigrette on sourdough bread </p>
                <p>Croque Monsieur $7.50 <br /> ham and cheese</p>
                <p> <span5>Pressed Turkey And Brie $8.50 </span5> <br /> w/ sliced tomato, caramelized onion and dijonnaise dressing</p>
                <p><span5>Pressed Pulled Pork $8.50</span5> <br /> w/ fontina cheese and roasted garlic aioli </p>
                <p><span5>Luluc Cheese Steak $9.50 </span5> <br /> grilled hanger steak (premium gold angus), caramelized onions and provolone cheese on sourdough baguette</p>
                <p><span5>Grilled Mahi Mahi Soft Taco $13.50 </span5> <br /> w/ sour cream, house guacamole and salsa served w/ basmati rice</p>
                <p><span5>Grilled Hamburger $7.50 </span5> <br /> w/ french fries (w/ cheese or bacon $1 extra) </p>
              </div>
              :
              <p></p>
            }
            {this.state.entrees === true ?
              <div className="entree">
                {/* <p>Entrees</p> */}
                <p> <span5>Grilled Lamb Brochette $14.50 </span5> <br /> w/ warm mushroom couscous yogurt dill sauce and meslun salad </p>
                <p><span5>Oven Roasted Rosemary Chicken $13.50</span5> <br /> wild mushroom risotto in truffle oil red wine sauce</p>
                <p> <span5>Pan Roasted Striped Bass $14.50 </span5> <br /> with fresh fettuccini pasta and sauteed vegetables (snow pea, tomatoes and red peppers) in a saffron sage sauce with crispy shallots </p>
                <p> <span5>Pan Seared Cod Fish $14.50 </span5> <br /> with spinach mashed potatoes, clams, crispy bacon in a butter, blanc sauce</p>
                <p> <span5>Grilled Glazed Salmon $14.00 </span5> <br /> w/ avocado, mango, cucumber roll and wasabi mayonnaise</p>
                <p><span5>Grilled Mahi Mahi Soft Taco $13.50 </span5> <br /> w/ sour cream, house guacamole and salsa served w/ basmati rice</p>
                <p><span5>Grilled Pork Chop $15.00 </span5> <br /> w/ apricot, garlic mashed potatoes and red wine and thyme sauce </p>
                <p><span5>Grilled Hanger Steak (premium Gold Angus) $14.50 </span5><br /> w/ french fries and caramelized onion sauce </p>
              </div>
              :
              <p></p>
            }
            {this.state.salad === true ?
              <div className="salad">
                {/* <p>Salads</p> */}
                <p><span5>Caesar Salad $13.50 </span5> <br /> With Chicken w/ grilled tiger shrimp </p>
                <p><span5>Mesclun Salad $6.00</span5> <br /> w/ balsamic roasted garlic dressing</p>
                <p><span5>Chickpea Salad $7.00 </span5> <br /> w/ fresh grilled corn, arugula and tomato seed vinaigrette</p>
                <p><span5>Roast Beet And Granny Smith Apple Salad $7.00</span5> <br /> with arugula, goat cheese and chive vinaigrette</p>
                <p><span5>Grilled Tiger Shrimp Salad $8.50 </span5> <br /> with asparagus, white beans, lemon and olive oil vinaigrette </p>
              </div>
              :
              <p></p>
            }
          </div>
        </div>
        <div className="bottom"></div>

      </div>
    )
  }

}

export default Menu;