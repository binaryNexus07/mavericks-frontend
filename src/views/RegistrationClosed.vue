<template>
  <div class="registration-closed">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="/images/team-heading.jpg" alt="Registration Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-50 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <h1 class="display-4 fw-bold mb-4">Registration Status</h1>
              <p class="lead">Team Mavericks Recruitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Closed Message -->
    <section class="registration-status py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="status-card p-5 shadow-lg rounded text-center">
              
              <!-- Closed Icon -->
              <div class="status-icon mb-4">
                <i class="fas fa-door-closed text-danger" style="font-size: 4rem;"></i>
              </div>

              <!-- Status Message -->
              <h2 class="fw-bold text-danger mb-4">Registration Closed</h2>
              
              <div class="alert alert-info mb-4" role="alert">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Online registration for Team Mavericks is currently closed.</strong>
              </div>

              <div class="status-content">
                <p class="lead mb-4">
                  Thank you for your interest in joining Team Mavericks! The online registration period has ended.
                </p>

                <!-- On-spot Registration Info -->
                <div class="onspot-info bg-light p-4 rounded mb-4">
                  <h4 class="text-primary mb-3">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    On-Spot Registration Available
                  </h4>
                  <p class="mb-3">
                    Don't worry! You can still join us through on-spot registration during our recruitment events.
                  </p>
                  
                  <div class="row text-start">
                    <div class="col-md-6 mb-3">
                      <h6 class="fw-bold">
                        <i class="fas fa-calendar-alt text-primary me-2"></i>When:
                      </h6>
                      <p class="mb-0">During recruitment events<br>Check our social media for updates</p>
                    </div>
                    <div class="col-md-6 mb-3">
                      <h6 class="fw-bold">
                        <i class="fas fa-map-pin text-primary me-2"></i>Where:
                      </h6>
                      <p class="mb-0">SLIET Campus<br>Venue will be announced</p>
                    </div>
                  </div>

                  <div class="requirements mt-4">
                    <h6 class="fw-bold mb-3">
                      <i class="fas fa-clipboard-list text-primary me-2"></i>
                      What to bring for on-spot registration:
                    </h6>
                    <ul class="list-unstyled text-start">
                      <li class="mb-2">
                        <i class="fas fa-check text-success me-2"></i>
                        Valid SLIET Student ID (if applicable or any other ID proof)
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check text-success me-2"></i>
                        Filled registration form (available at venue)
                      </li>
                      <li class="mb-2">
                        <i class="fas fa-check text-success me-2"></i>
                        Enthusiasm to join Team Mavericks!
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Stay Connected -->
                <div class="stay-connected">
                  <h5 class="mb-3">
                    <i class="fas fa-bell text-warning me-2"></i>
                    Stay Updated
                  </h5>
                  <p class="mb-4">
                    Follow our social media channels to get notified about recruitment events and on-spot registration opportunities.
                  </p>
                  
                  <!-- Social Links -->
                  <div class="social-links d-flex justify-content-center gap-3">
                    <!-- <a 
                      href="https://chat.whatsapp.com/D64S9cQtZa8K3JHfrYHoW5?mode=ems_wa_t" 
                      class="btn btn-success btn-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i class="fab fa-whatsapp me-2"></i>
                      Join WhatsApp Group
                    </a> -->
                  </div>
                  
                  <div class="mt-3 d-flex justify-content-center gap-3">
                    <a href="https://www.instagram.com/mavericks_sliet/" class="text-decoration-none">
                      <i class="fab fa-instagram fa-2x text-danger"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/mavericks-sliet/" class="text-decoration-none">
                      <i class="fab fa-linkedin fa-2x text-primary"></i>
                    </a>
                    <a href="https://www.facebook.com/mavericks.sliet/" class="text-decoration-none">
                      <i class="fab fa-facebook fa-2x text-primary"></i>
                    </a>
                  </div>
                </div>

                <!-- Admin Access (Hidden by default - only visible on direct access or for special cases) -->
                <!-- <div class="admin-section mt-4" style="display: none;" id="adminSection">
                  <div class="alert alert-warning" role="alert">
                    <i class="fas fa-tools me-2"></i>
                    <strong>Admin/Special Access:</strong>
                    <router-link to="/onspot-registration" class="btn btn-sm btn-outline-primary ms-2">
                      Access On-Spot Registration Form
                    </router-link>
                  </div>
                </div> -->

                <!-- Contact Info -->
                <div class="contact-info mt-5 pt-4 border-top">
                  <h6 class="fw-bold mb-3">
                    <i class="fas fa-question-circle text-info me-2"></i>
                    Have Questions?
                  </h6>
                  <p class="mb-2">
                    <i class="fas fa-envelope text-muted me-2"></i>
                    <a href="mailto:mavericks@sliet.ac.in" class="text-decoration-none">mavericks@sliet.ac.in</a>
                  </p>
                  <p class="mb-0">
                    <i class="fas fa-phone text-muted me-2"></i>
                    Contact us through WhatsApp group for quick responses
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegistrationClosed',
  mounted() {
    // Update page title
    document.title = 'Registration Closed - Team Mavericks';
    
    // Check for admin access parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      this.showAdminSection();
    }
    
    // Listen for special key combination (Ctrl + Shift + A)
    document.addEventListener('keydown', this.handleKeyPress);
  },
  
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  },
  
  methods: {
    handleKeyPress(event) {
      // Ctrl + Shift + A to show admin section
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        this.showAdminSection();
      }
    },
    
    showAdminSection() {
      const adminSection = document.getElementById('adminSection');
      if (adminSection) {
        adminSection.style.display = 'block';
        adminSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  height: 60vh;
  overflow: hidden;
}

.hero-background img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
}

.min-vh-50 {
  min-height: 50vh;
}

/* Registration Status Section */
.registration-status {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 80vh;
}

.status-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
}

.status-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(45deg, #dc3545, #fd7e14, #ffc107);
}

.status-icon {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.onspot-info {
  border-left: 4px solid #007bff;
}

.social-links a {
  transition: transform 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
}

/* Animations */
.status-card {
  animation: slideInUp 0.8s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    height: 50vh;
  }
  
  .status-card {
    padding: 2rem 1.5rem !important;
  }
  
  .status-icon i {
    font-size: 3rem !important;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-links .btn {
    width: 100%;
    max-width: 250px;
  }
}

/* Print Styles */
@media print {
  .hero-section,
  .social-links {
    display: none;
  }
  
  .status-card {
    box-shadow: none !important;
    border: 2px solid #000;
  }
}
</style>