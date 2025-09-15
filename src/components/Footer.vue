<template>
  <footer class="footer-main py-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="footer-title mb-3">Team Mavericks</h5>
          <p class="footer-text">
            A premier robotics club dedicated to fostering innovation, creativity, and technical excellence 
            among students through hands-on projects and collaborative learning.
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/mavericks.sliet" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <!-- <a href="#" class="social-link"><i class="fab fa-twitter"></i></a> -->
            <a href="https://instagram.com/mavericks_sliet?igshid=NTdlMDg3MTY=" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/team-mavericks/" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            <!-- <a href="#" class="social-link"><i class="fab fa-youtube"></i></a> -->
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4">
          <h6 class="footer-title mb-3">Quick Links</h6>
          <ul class="footer-links">
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/teams" class="footer-link">Our Team</router-link></li>
            <li><router-link to="/projects" class="footer-link">Projects</router-link></li>
            <li><router-link to="/gallery" class="footer-link">Gallery</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="footer-title mb-3">Contact Info</h6>
          <ul class="footer-contact">
            <li class="contact-item">
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <span>SLIET Longowal, Punjab, India</span>
            </li>
            <li class="contact-item">
              <i class="fas fa-phone contact-icon"></i>
              <ul class="contact-list" style="padding:0; margin:0; list-style:none;">
                <li style="display:flex; justify-content:space-between; font-size:0.95rem; margin-bottom:4px;">
                  <span class="contact-name" style="font-weight:500;">Teja Reddy</span>
                  <span class="contact-phone" style="color:#b0b0b0;">+91 7013261300</span>
                </li>
                <li style="display:flex; justify-content:space-between; font-size:0.95rem;">
                  <span class="contact-name" style="font-weight:500;">Prashant Mishra</span>
                  <span class="contact-phone" style="color:#b0b0b0;">+91 6386472530</span>
                </li>
              </ul>
            </li>
            <li class="contact-item">
              <i class="fas fa-envelope contact-icon"></i>
              <span>mavericks@sliet.ac.in</span>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4">
          <h6 class="footer-title mb-3">Newsletter</h6>
          <p class="footer-text">Subscribe to our newsletter for updates</p>
          <div class="newsletter-form">
            <input type="email" class="newsletter-input" placeholder="Your email" v-model="email">
            <button class="newsletter-btn" type="button" @click="subscribe">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      
      <hr class="footer-divider">
      
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="footer-copyright">
            &copy; {{ new Date().getFullYear() }} Team Mavericks. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="footer-copyright">
            Made with <i class="fas fa-heart heart-icon"></i> by Team Mavericks
            <a href="https://github.com/eabhi-me" target="_blank" class="ms-2" title="Connect with Developer">
              <i class="fab fa-github"></i> Developer
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export default {
  name: 'Footer',
  setup() {
    const email = ref('')
    const toast = useToast()

    const subscribe = () => {
      if (email.value) {
        toast.success('Thank you for subscribing to our newsletter!')
        email.value = ''
      } else {
        toast.error('Please enter a valid email address')
      }
    }

    return {
      email,
      subscribe
    }
  }
}
</script>

<style scoped>
.footer-main {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  position: relative;
}

.footer-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.05"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.footer-title {
  color: #007bff !important;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  position: relative;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background: #007bff;
  border-radius: 1px;
}

.footer-text {
  color: #e0e0e0 !important;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 15px;
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff !important;
  border-radius: 50%;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: #007bff;
  color: #ffffff !important;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #e0e0e0 !important;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all 0.3s ease;
  color: #007bff;
}

.footer-link:hover {
  color: #007bff !important;
  padding-left: 15px;
}

.footer-link:hover::before {
  opacity: 1;
}

/* Contact Info */
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.contact-icon {
  color: #007bff;
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

/* Newsletter */
.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 1rem;
}

.newsletter-input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  outline: none;
  border-color: #007bff;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.newsletter-btn {
  padding: 12px 15px;
  background: #007bff;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.newsletter-btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

/* Footer Divider */
.footer-divider {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 2rem 0;
}

/* Copyright */
.footer-copyright {
  color: #b0b0b0;
  margin: 0;
  font-size: 0.9rem;
}

.heart-icon {
  color: #ff4757;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-links {
    justify-content: center;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .footer-copyright {
    text-align: center;
    margin-top: 1rem;
  }
}
</style> 