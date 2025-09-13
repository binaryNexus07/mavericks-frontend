<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top myNavClass animate-fade-in">
    <div class="container-fluid align-items-center">
      <router-link class="navbar-brand logo-txt fw-bold fs-3" to="/">
        <img src="/images/mavericks-removebg-preview.png" alt="Mavericks Logo" height="50">
        <span class="mav-color fw-bold font-monospace">Team Mavericks</span>
      </router-link>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/about" @click="handleNavLinkClick">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/teams" @click="handleNavLinkClick">Team</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/projects" @click="handleNavLinkClick">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/contact" @click="handleNavLinkClick">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/gallery" @click="handleNavLinkClick">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link animate-slide-in" to="/student-registration" @click="handleNavLinkClick">
              <i class="fas fa-user-plus me-1"></i>Join Us
            </router-link>
          </li>
          
          <template v-if="authStore.isAuthenticated">
            <li class="nav-item">
              <router-link class="nav-link animate-slide-in" to="/dashboard" @click="handleNavLinkClick">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link animate-slide-in" href="#" @click.prevent="logout">Logout</a>
            </li>
          </template>
        </ul>

        <!-- <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle animate-slide-in" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><i class="fas fa-calendar me-2"></i>Events</a></li>
              <li><a class="dropdown-item" href="#"><i class="fas fa-newspaper me-2"></i>News</a></li>
              <li><a class="dropdown-item" href="#"><i class="fas fa-book me-2"></i>Resources</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#"><i class="fas fa-info-circle me-2"></i>About Us</a></li>
            </ul>
          </li>
          
          <template v-if="!authStore.isAuthenticated">
            <li class="nav-item">
              <router-link class="nav-link animate-slide-in" to="/login" @click="handleNavLinkClick">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link animate-slide-in" to="/register" @click="handleNavLinkClick">Register</router-link>
            </li>
          </template>
        </ul> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navbar',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    const logout = () => {
      authStore.logout()
      router.push('/login')
    }

    const closeNavbar = () => {
      const navbarCollapse = document.getElementById('navbarSupportedContent')
      const navbarToggler = document.querySelector('.navbar-toggler')
      
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show')
        navbarToggler.setAttribute('aria-expanded', 'false')
        navbarToggler.classList.add('collapsed')
      }
    }

    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar')
      const navbarCollapse = document.getElementById('navbarSupportedContent')
      
      if (navbar && navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbar.contains(event.target)) {
          closeNavbar()
        }
      }
    }

    const handleNavLinkClick = () => {
      // Close navbar when nav link is clicked on mobile
      setTimeout(() => {
        closeNavbar()
      }, 100)
    }

    onMounted(() => {
      // Add click outside listener
      document.addEventListener('click', handleClickOutside)
      
      // Add click listeners to all nav links
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick)
      })
    })

    onUnmounted(() => {
      // Clean up event listeners
      document.removeEventListener('click', handleClickOutside)
      
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick)
      })
    })

    return {
      authStore,
      logout,
      closeNavbar,
      handleNavLinkClick
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.navbar-collapse {
  transition: all 0.3s ease-in-out;
}

.navbar-toggler {
  border: none;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

.navbar-toggler-icon {
  transition: all 0.3s ease;
}

.navbar-brand img {
  transition: transform 0.3s ease;
}

.navbar-brand:hover img {
  transform: scale(1.05);
}

.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #007bff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { 
    opacity: 0;
    transform: translateY(-20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.mav-color {
  color: #007bff;
}

.logo-txt {
  text-decoration: none;
  color: inherit;
}

.logo-txt:hover {
  color: inherit;
  text-decoration: none;
}

/* Mobile menu improvements */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.98);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding: 1rem;
  }
  
  .nav-link {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    margin: 0.25rem 0;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    background: rgba(0, 123, 255, 0.1);
    transform: translateX(5px);
  }
  
  .navbar-nav {
    gap: 0.25rem;
  }
}

/* Smooth collapse animation */
.navbar-collapse.collapsing {
  transition: height 0.35s ease;
}
</style> 