<template>
  <div v-if="showPopup" class="registration-popup-overlay" @click="closePopup">
    <div class="registration-popup" @click.stop>
      <button class="popup-close" @click="closePopup">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="popup-header">
        <div class="popup-icon">
          <i class="fas fa-bullhorn text-primary"></i>
        </div>
        <h3 class="popup-title">Registration is Now Open!</h3>
      </div>
      
      <div class="popup-content">
        <p class="popup-message">
          🎉 <strong>Team Mavericks</strong> is excited to welcome new members! 
          Join our innovative robotics team and be part of groundbreaking projects.
        </p>
        
        <div class="popup-deadline">
          <div class="deadline-badge">
            <i class="fas fa-calendar-alt me-2"></i>
            <span>Last Date: <strong>21st September, 2025</strong></span>
          </div>
        </div>
        
        <div class="popup-benefits">
          <ul>
            <li><i class="fas fa-check-circle text-success me-2"></i>Learn cutting-edge robotics technology</li>
            <li><i class="fas fa-check-circle text-success me-2"></i>Work on real-world projects</li>
            <li><i class="fas fa-check-circle text-success me-2"></i>Collaborate with talented peers</li>
            <li><i class="fas fa-check-circle text-success me-2"></i>Build your professional portfolio</li>
          </ul>
        </div>
      </div>
      
      <div class="popup-actions">
        <router-link to="/student-registration" class="btn btn-primary btn-lg popup-register-btn" @click="closePopup">
          <i class="fas fa-user-plus me-2"></i>
          Register Now
        </router-link>
        <button class="btn btn-outline-secondary" @click="closePopup">
          Maybe Later
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'RegistrationPopup',
  setup() {
    const showPopup = ref(false)

    const closePopup = () => {
      showPopup.value = false
      // Remember popup was closed only for this session (not permanently)
      sessionStorage.setItem('registrationPopupClosed', 'true')
    }

    const checkAndShowPopup = () => {
      // Check if popup was closed in this session
      const popupClosed = sessionStorage.getItem('registrationPopupClosed')
      
      // Show registration popup after 2 seconds if not closed in this session
      setTimeout(() => {
        if (!popupClosed) {
          showPopup.value = true
        }
      }, 2000)
    }

    onMounted(() => {
      checkAndShowPopup()
    })

    return {
      showPopup,
      closePopup
    }
  }
}
</script>

<style scoped>
/* Registration Popup Styles */
.registration-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease-in-out;
}

.registration-popup {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideIn 0.4s ease-out;
}

.popup-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.popup-close:hover {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  transform: scale(1.1);
}

.popup-header {
  text-align: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e9ecef;
}

.popup-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.popup-title {
  font-size: 1.75rem;
  font-weight: bold;
  color: #212529;
  margin: 0;
}

.popup-content {
  padding: 2rem;
}

.popup-message {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #495057;
  margin-bottom: 1.5rem;
  text-align: center;
}

.popup-deadline {
  text-align: center;
  margin-bottom: 1.5rem;
}

.deadline-badge {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #dc3545, #e74c3c);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
  animation: pulse 2s infinite;
}

.popup-benefits {
  margin-bottom: 1.5rem;
}

.popup-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.popup-benefits li {
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #495057;
  display: flex;
  align-items: center;
}

.popup-actions {
  padding: 1rem 2rem 2rem;
  text-align: center;
  border-top: 1px solid #e9ecef;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.popup-register-btn {
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.popup-register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(220, 53, 69, 0.5);
  }
  100% {
    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .registration-popup {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
  
  .popup-header {
    padding: 1.5rem 1.5rem 1rem;
  }
  
  .popup-content {
    padding: 1.5rem;
  }
  
  .popup-actions {
    padding: 1rem 1.5rem 1.5rem;
    flex-direction: column;
  }
  
  .popup-actions .btn {
    width: 100%;
  }
}
</style>