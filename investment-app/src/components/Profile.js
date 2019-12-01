import React from 'react';
import '../common/style.css';
import userImg from '../images/user.png';
function Profile() {
    return(
        <div className='profile'>
            <div className='profile-body'>
                <div className='info'>
                    <p className='grey'>Your Profile</p>
                    <img src={userImg} alt='user' style={{width:'80px', height:'80px'}}></img>
                    <h4>John Doe</h4>
                    <h6 style={{color: 'c5c5c5'}}>Enterpreneur</h6>
                    <h4>About</h4>
                    <p className='about'>Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    Lorem ipsum coeltnvbhl kdkgnnb sjfj fghj uksd f jsdjfvm tsdhfb
                    </p>
                </div>
                <div className='details-left'>
                    <p className='grey'>Personal Details</p>
                    <div>
                        <span className='title'>Age:</span>
                        <span className='value'>38 years</span>
                    </div>
                    <div>
                        <span className='title'>Gender:</span>
                        <span className='value'>Male</span>
                    </div>
                    <div>
                        <span className='title'>Marital Status:</span>
                        <span className='value'>Married</span>
                    </div>
                    <p className='grey' style={{marginTop: '70px'}}>Address Details</p>
                <div>
                    <span className='title'>Flat/House no:</span>
                    <span className='value'>21B</span>
                </div>
                <div>
                    <span className='title'>Street Address</span>
                    <span className='value'>Park Street, Baker field</span>
                </div>
                <div>
                    <span className='title'>City:</span>
                    <span className='value'>Mumbai</span>
                </div>
                <div>
                    <span className='title'>State:</span>
                    <span className='value'>Maharashtra</span>
                </div>
                <div>
                    <span className='title'>Country:</span>
                    <span className='value'>India</span>
                </div>
                </div>
                <div className='details-right'>
                    <p className='grey'>Financial Details</p>
                    <div>
                        <span className='title'>Montly Income:</span>
                        <span className='value'>$2000</span>
                    </div>
                    <div>
                        <span className='title'>Intended amount for investment:</span>
                        <span className='value'>$300</span>
                    </div>
                    <p className='grey' style={{marginTop: '100px'}}>Bank Account Detail</p>
                    <div>
                        <span className='title'>Account Number:</span>
                        <span className='value'>12357869659</span>
                    </div>
                    <div>
                        <span className='title'>IFSC Code:</span>
                        <span className='value'>FHEA0358</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;