import Laptop from '../assets/data2.png'

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2" >
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop"/>
                <div className="flex flex-col justify-center md:pl-4">
                    <p className="text-[#00df9a] font-bold">Data ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim deserunt dolores distinctio magnam porro! Deleniti assumenda perferendis optio laboriosam dicta veniam, dolorum architecto hic fugit libero facilis eos quibusdam?</p>
                    <button className="bg-black text-[#00df9a] w-[208px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics