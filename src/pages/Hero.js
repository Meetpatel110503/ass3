import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb"
import { RiRefund2Fill } from "react-icons/ri"
import { MdSupportAgent } from "react-icons/md"

const data = [
  {
    icon: <TbTruckDelivery className='text-4xl' />,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Fill className='text-4xl' />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount2 className='text-4xl' />,
    title: "Member Discount",
    desc: "On order over Rs.5999",
  },
  {
    icon: <MdSupportAgent className='text-4xl' />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
]

const Hero = () => (
  <div className='px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto'>
    {data.map((item) => (
      <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla">
      {item.icon}
      <div>
        <h2 className="font-medium text-xl">{item.title}</h2>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    </div>
    ))}
  </div>
)

export default Hero
