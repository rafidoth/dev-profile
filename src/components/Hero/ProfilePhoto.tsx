import React from 'react'
import formal from '../../assets/formal.png'
import formalbw from '../../assets/formalbw.png'
import casual from '../../assets/casual.png'
import casualbw from '../../assets/casualbw.png'
import styles from './ProfilePhoto.module.scss'




export default function ProfilePhoto({
  picture, changeBright
}: {
  picture: string,
  changeBright: (bright: boolean) => void
}) {
  if (picture === 'formalbw') return <img className={styles.imgClass} src={formalbw} width={200} />
  if (picture === 'formal') return <img className={styles.imgClass} src={formal} width={200} />
  if (picture === 'casual') return <img className={styles.imgClass} src={casual} width={200} />
  if (picture === 'casualbw') return <img className={styles.imgClass} src={casualbw} width={200} />
}
