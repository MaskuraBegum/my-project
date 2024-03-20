

const Navul = ({route}) => {
    const {id,path,name} = route;
    return (
        <div className="mr-6">
            <li><a href={path}>{name}</a></li>
        </div>
    );
};

export default Navul;