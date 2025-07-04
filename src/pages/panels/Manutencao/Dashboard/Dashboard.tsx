
import InvoicesSection from "./Sections/InvoicesSection";
import { useOutletContext } from 'react-router-dom';
import CustosDetalhados from './Sections/CustosDetalhados';
import FleetSection from './Sections/FleetSection';
import { OverView } from './Sections/OverView';
import SuppliersSection from './Sections/Supplierssection';

export default function Dashboard() {
  const isMobile = useOutletContext<boolean>();

  const render = true
  const showQuemFez = false
  return(
   <>
    {/* Sections as sub-components */}
    {QuemFez('Jhonatan', showQuemFez)}
    <OverView isMobile={isMobile}/>
    {QuemFez('Filipe Farias', showQuemFez)}
    {!render?'':<CustosDetalhados/>}
    {QuemFez('Filipe Farias', showQuemFez)}
    {!render?'':<InvoicesSection/>}
    {QuemFez('Jhonatan', showQuemFez)}
    {!render?'':<FleetSection isMobile={isMobile} className={''}/>}
    {QuemFez('Jhonatan', showQuemFez)}
    {!render?'':<SuppliersSection isMobile={isMobile}/>}
   </>
  )
}

const QuemFez = (text: string, show: boolean) => {
  return (
    <>
      {show? <h1 className='bg-red-500 rounded-md my-5 p-2 justify-center font-bold'>{`Seção desevolvida por ${text}`}</h1> : ''}
    </>
  )
}

