import myfn from '../../MyFn';
import styles from './PhotoTitle.module.scss';



export default function PhotoTitle({ title }: { title: string }) {
  let cls = []
  cls.push(styles.photoTitle)
  cls.push("handwrittenFont")
  return (
    <span
      className={myfn.getClassName(cls)}
    > {title}.png</span >
  )
}
