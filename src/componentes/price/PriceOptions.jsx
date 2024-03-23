import PriceOption from "./PriceOption";


const PriceOptions = () => {

 const prices =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99/month",
          "features": [
            "Access to all equipment and facilities",
            "Free fitness classes",
            "Personal trainer consultation"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": "$19.99/month",
          "features": [
            "Valid student ID required",
            "Access to gym during off-peak hours",
            "Discounts on additional services"
          ]
        }
      ]
      

    return (
        <div className="flex flex-col lg:flex-row justify-around my-10 gap-6 lg:gap-0">
            {
                prices.map(option => <PriceOption  key={option.id} option = {option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;