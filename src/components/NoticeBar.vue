<template>
  <div v-if="showNotice" class="notice-bar">
    <div class="container">
      <div class="notice-content">
        <div class="notice-icon">
          <i class="fas fa-megaphone"></i>
        </div>
        <div class="notice-text">
          <strong>🎉 Recruitment Open!</strong>
          Team Mavericks is recruiting new members. Last date: <strong>21st September, 2025</strong>
        </div>
        <div class="notice-actions">
          <router-link to="/student-registration" class="notice-btn">
            <i class="fas fa-user-plus me-1"></i>
            Apply Now
          </router-link>
          <button class="notice-close" @click="hideNotice" title="Close">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'NoticeBar',
  emits: ['close'],
  setup(props, { emit }) {
    const showNotice = ref(true)

    const hideNotice = () => {
      showNotice.value = false
      // Remember that notice was dismissed for this session
      sessionStorage.setItem('noticeBarHidden', 'true')
      // Emit close event to parent
      emit('close')
    }

    onMounted(() => {
      // Check if notice was dismissed in this session
      const isHidden = sessionStorage.getItem('noticeBarHidden')
      if (isHidden === 'true') {
        showNotice.value = false
        emit('close')
      }
    })

    return {
      showNotice,
      hideNotice
    }
  }
}
</script>

<style scoped>
.notice-bar {
  background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
  color: white;
  padding: 0.75rem 0;
  position: fixed;
  top: 80px; /* Position below the navbar (navbar height = 80px) */
  left: 0;
  right: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.4s ease-out;
  height: 60px; /* Define a fixed height for the notice bar */
  z-index: 1040; /* Below navbar but above other content */
}

.notice-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  text-align: center;
}

.notice-icon {
  font-size: 1.2rem;
  animation: bounce 2s infinite;
}

.notice-text {
  font-size: 0.95rem;
  font-weight: 500;
  flex: 1;
  min-width: 250px;
}

.notice-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.notice-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.85rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.notice-btn:hover {
  background: white;
  color: #dc3545;
  border-color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.notice-close {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.notice-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Animations */
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-1px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .notice-bar {
    padding: 0.75rem 0;
    height: auto; /* Allow auto height to accommodate stacked content */
    min-height: 70px; /* Minimum height for consistency */
  }
  
  .notice-content {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
  }
  
  .notice-text {
    font-size: 0.9rem;
    min-width: auto;
    line-height: 1.3;
  }
  
  .notice-actions {
    justify-content: center;
    width: 100%;
  }
  
  .notice-btn {
    flex: 1;
    text-align: center;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .notice-bar {
    padding: 0.5rem 0;
    min-height: 80px; /* Slightly taller for very small screens */
  }
  
  .notice-content {
    gap: 0.4rem;
  }
  
  .notice-text {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 0 0.5rem;
  }
  
  .notice-btn {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
    white-space: nowrap;
  }
  
  .notice-actions {
    gap: 0.5rem;
  }
}
</style>