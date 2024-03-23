import Feature from "./Feature";


const PriceOption = ({option}) => {
    const {name, price,features} = option;
    return (
        <div className='bg-green-300 p-8'>
            <h1>
                <span className="text-4xl">{price}</span>
            </h1>
            <h1 className="font-bold">{name}</h1>
            <div className="p-6">
            <ul className="list-disc">
                {
                    features.map((feature,idx) => <Feature  key={idx} feature={feature}></Feature>)
                }
            </ul>
            </div>
            <button className="w-full bg-blue-600">BUY NOW</button>
        </div>
    );
};

export default PriceOption;