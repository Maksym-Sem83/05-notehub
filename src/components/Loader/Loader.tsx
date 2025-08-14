import { FadeLoader } from "react-spinners";
import scc from './Loader.module.css';

export default function Loader() {
    return <div className={scc.fade}>{<FadeLoader height={20} color="#6de422"/>}</div>
}