import React from 'react';
import styles from './Calculator.module.css';
import Display from '../Display';
import Button from '../Button';

class Calculator extends React.Component{
  render () {
    return(
      <div className={styles.container}>
        <Display>RESULT</Display>
        <table>
          <tbody>
          <tr>
            <td className={styles.controlButton}><Button className={styles.button}>+</Button></td>
            <td className={styles.controlButton}><Button className={styles.button}>-</Button></td>
            <td className={styles.controlButton}><Button className={styles.button}>&#10005;</Button></td>
            <td className={styles.controlButton}><Button className={styles.button}>&#247;</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>7</Button></td>
            <td><Button className={styles.button}>8</Button></td>
            <td><Button className={styles.button}>9</Button></td>
            <td rowSpan={4} className={styles.equalButton}><Button className={styles.button}>=</Button></td>
          </tr>
          <tr>
            <td><Button className={styles.button}>4</Button></td>
            <td><Button className={styles.button}>5</Button></td>
            <td><Button className={styles.button}>6</Button></td>

          </tr>
          <tr>
            <td><Button className={styles.button}>1</Button></td>
            <td><Button className={styles.button}>2</Button></td>
            <td><Button className={styles.button}>3</Button></td>

          </tr>
          <tr>
            <td><Button className={styles.button}>0</Button></td>
            <td><Button className={styles.button}>.</Button></td>
            <td><Button className={styles.button}>C</Button></td>

          </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Calculator;