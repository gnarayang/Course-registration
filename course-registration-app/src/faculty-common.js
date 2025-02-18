import React from 'react'
import styles from './css/home.module.css'

class Header extends React.Component {

    handleLogoClick() {
        this.props.value.history.push('/faculty/home')
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={styles.header}>
                    <h1 className={styles.box} onClick={() => this.handleLogoClick()}>OCR</h1>
                </div>
                <div className={styles.pageTitle}>
                    <h1 >{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

class Navigator extends React.Component {

    handleNavClick(page) {
        switch (page) {
            case 'offered':
                this.props.value.history.push('/faculty/courses')
                break
            case 'pending':
                this.props.value.history.push('/faculty/reg-courses')
                break
            case 'add':
                this.props.value.history.push('/faculty/add-course')
                break
            case 'graded':
                alert('yeet')
                break
            case 'profile':
                this.props.value.history.push('/faculty/profile')
                break
        }
    }

    render() {
        return (
            <div style={{ marginTop: '-15px' }}>
                <ul className={styles.navList}>
                    <li className={styles.menuLi} onClick={() => this.handleNavClick('available')}>Menu</li>
                    <li className={styles.li} onClick={() => this.handleNavClick('add')}>Add Courses</li>
                    <li className={styles.li} onClick={() => this.handleNavClick('offered')}>Offered Courses</li>
                    <li className={styles.li} onClick={() => this.handleNavClick('pending')}>Pending Courses</li>
                    {/* <li className={styles.li} onClick={() => this.handleNavClick('graded')}>Graded Courses</li> */}
                    <li className={styles.li} onClick={() => this.handleNavClick('profile')}>Profile</li>
                </ul>
            </div>
        )
    }
}

export { Header, Navigator }