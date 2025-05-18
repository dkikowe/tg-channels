import s from "./Channel.module.sass";
import ChannelBlock from "./ChannelBlock";

export default function Channel() {
  return (
    <div className={s.container}>
      <ChannelBlock />
    </div>
  );
}
