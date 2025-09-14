<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="/images/headline2.jpg" alt="Contact Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-50 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <h1 class="display-4 fw-bold mb-4">Contact Us</h1>
              <p class="lead">Get in touch with Team Mavericks</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Information -->
          <div class="col-lg-4 mb-5">
            <h2 class="display-6 fw-bold mb-4">Get In Touch</h2>
            <p class="text-muted mb-4">
              Have questions about our projects, events, or want to join our team? 
              We'd love to hear from you!
            </p>
            
            <div class="contact-info">
              <div class="contact-item d-flex align-items-center mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-map-marker-alt text-primary fa-2x"></i>
                </div>
                <div>
                  <h6 class="mb-1">Address</h6>
                  <p class="text-muted mb-0">
                    SLIET Longowal<br>
                    Sangrur, Punjab, India<br>
                    PIN: 148106
                  </p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-center mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-phone text-primary fa-2x"></i>
                </div>
                <div>
                  <h6 class="mb-1">Phone</h6>
                  <p class="text-muted mb-0">+91 ___________</p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-center mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-envelope text-primary fa-2x"></i>
                </div>
                <div>
                  <h6 class="mb-1">Email</h6>
                  <p class="text-muted mb-0">mavericks@sliet.ac.in</p>
                </div>
              </div>
              
              <div class="contact-item d-flex align-items-center mb-4">
                <div class="contact-icon me-3">
                  <i class="fas fa-clock text-primary fa-2x"></i>
                </div>
                <div>
                  <h6 class="mb-1">Working Hours</h6>
                  <p class="text-muted mb-0">
                    Monday - Friday: 9:00 AM - 5:00 PM<br>
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Social Media -->
            <div class="social-media mt-5">
              <h6 class="mb-3">Follow Us</h6>
              <div class="social-links">
                <a href="https://www.facebook.com/mavericks.sliet" class="social-link me-3" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-facebook-f fa-2x text-primary"></i>
                </a>
                <a href="#" class="social-link me-3">
                  <i class="fab fa-twitter fa-2x text-primary"></i>
                </a>
                <a href="https://instagram.com/mavericks_sliet?igshid=NTdlMDg3MTY=" class="social-link me-3" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-instagram fa-2x text-primary"></i>
                </a>
                <a href="https://www.linkedin.com/company/team-mavericks/" class="social-link me-3" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin-in fa-2x text-primary"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="fab fa-youtube fa-2x text-primary"></i>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="contact-form-card p-5 bg-white rounded shadow">
              <h2 class="display-6 fw-bold mb-4">Send us a Message</h2>
              
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name" class="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="name" 
                      v-model="form.name"
                      :class="{ 'is-invalid': errors.name }"
                      required
                    >
                    <div class="invalid-feedback" v-if="errors.name">
                      {{ errors.name }}
                    </div>
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="form.email"
                      :class="{ 'is-invalid': errors.email }"
                      required
                    >
                    <div class="invalid-feedback" v-if="errors.email">
                      {{ errors.email }}
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      id="phone" 
                      v-model="form.phone"
                    >
                  </div>
                  
                  <div class="col-md-6 mb-3">
                    <label for="subject" class="form-label">Subject *</label>
                    <select 
                      class="form-select" 
                      id="subject" 
                      v-model="form.subject"
                      :class="{ 'is-invalid': errors.subject }"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Event Information">Event Information</option>
                      <option value="Join Team">Join Team</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                    <div class="invalid-feedback" v-if="errors.subject">
                      {{ errors.subject }}
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="message" class="form-label">Message *</label>
                  <textarea 
                    class="form-control" 
                    id="message" 
                    rows="5" 
                    v-model="form.message"
                    :class="{ 'is-invalid': errors.message }"
                    required
                  ></textarea>
                  <div class="invalid-feedback" v-if="errors.message">
                    {{ errors.message }}
                  </div>
                </div>
                
                <div class="d-grid">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Find Us</h2>
            <p class="lead text-muted">Visit us at SLIET Longowal</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-12">
            <div class="map-container bg-white rounded shadow p-4">
              <div id="map" style="height: 400px; width: 100%; border-radius: 8px;"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useToast } from 'vue-toastification'

export default {
  name: 'Contact',
  setup() {
    const toast = useToast()
    const isSubmitting = ref(false)
    let map = null
    
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const errors = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Initialize map
    const initMap = () => {
      try {
        // Create map centered on SLIET Longowal coordinates
        map = L.map('map').setView([30.2331, 75.9533], 15)
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
        
        // Custom marker icon for SLIET
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: '<div class="marker-pin"><i class="fas fa-university"></i></div>',
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        })
        
        // Add marker for SLIET
        const marker = L.marker([30.2331, 75.9533], { icon: customIcon }).addTo(map)
        
        // Add popup to marker
        marker.bindPopup(`
          <div class="map-popup">
            <h6><strong>SLIET Longowal</strong></h6>
            <p class="mb-1">Sant Longowal Institute of Engineering and Technology</p>
            <p class="mb-1">Longowal, Sangrur</p>
            <p class="mb-1">Punjab, India - 148106</p>
            <hr class="my-2">
            <small class="text-muted">Team Mavericks</small>
          </div>
        `).openPopup()
        
        // Add a circle to highlight the campus area
        L.circle([30.2331, 75.9533], {
          color: '#007bff',
          fillColor: '#007bff',
          fillOpacity: 0.1,
          radius: 500
        }).addTo(map)
        
      } catch (error) {
        console.error('Error initializing map:', error)
        // Fallback: show a message if map fails to load
        document.getElementById('map').innerHTML = `
          <div class="map-fallback text-center py-5">
            <i class="fas fa-map-marked-alt fa-4x text-muted mb-3"></i>
            <h5 class="text-muted">Map Loading...</h5>
            <p class="text-muted">If the map doesn't load, please check your internet connection.</p>
            <p class="text-muted">
              <strong>SLIET Longowal</strong><br>
              Sangrur, Punjab, India<br>
              PIN: 148106
            </p>
          </div>
        `
      }
    }
    
    // Load Leaflet CSS and JS
    const loadMapResources = () => {
      return new Promise((resolve, reject) => {
        // Check if Leaflet is already loaded
        if (window.L) {
          resolve()
          return
        }
        
        // Load Leaflet CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
        
        // Load Leaflet JS
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }
    
    const validateForm = () => {
      let isValid = true
      errors.name = ''
      errors.email = ''
      errors.subject = ''
      errors.message = ''
      
      if (!form.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
      }
      
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      if (!form.subject) {
        errors.subject = 'Please select a subject'
        isValid = false
      }
      
      if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
      }
      
      return isValid
    }
    
    const submitForm = async () => {
      if (!validateForm()) {
        return
      }
      
      isSubmitting.value = true
      
      try {
        // Create mailto link to send via client's email application
        const emailSubject = `Contact Form: ${form.subject}`
        const emailBody = `Dear Team Mavericks,

I am contacting you regarding: ${form.subject}

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'Not provided'}

Message:
${form.message}

---
Sent from Team Mavericks website contact form
Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Please reply to this email address: ${form.email}

Best regards,
${form.name}`

        const mailtoLink = `mailto:mavericks@sliet.ac.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
        
        // Open client's default email application
        window.location.href = mailtoLink
        
        // Small delay to ensure mailto link is processed
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = ''
        })
        
        toast.success('Your email client has been opened with a pre-filled message to mavericks@sliet.ac.in. Please send the email from your email application.')
        
      } catch (error) {
        console.error('Error opening email client:', error)
        toast.error('Unable to open email client. Please manually email us at mavericks@sliet.ac.in')
      } finally {
        isSubmitting.value = false
      }
    }
    
    // Lifecycle hooks
    onMounted(async () => {
      try {
        await loadMapResources()
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          initMap()
        }, 100)
      } catch (error) {
        console.error('Failed to load map resources:', error)
      }
    })
    
    onUnmounted(() => {
      if (map) {
        map.remove()
        map = null
      }
    })
    
    return {
      form,
      errors,
      isSubmitting,
      submitForm
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background img {
  object-fit: cover;
  height: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  z-index: 1;
}

.contact-form-card {
  border: 1px solid #e9ecef;
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.social-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.map-container {
  min-height: 400px;
}

.map-placeholder {
  background: #f8f9fa;
  border-radius: 10px;
}

.map-fallback {
  background: #f8f9fa;
  border-radius: 10px;
}

/* Custom map marker styles */
.custom-marker {
  background: transparent;
  border: none;
}

.marker-pin {
  width: 30px;
  height: 30px;
  background: #007bff;
  border-radius: 50% 50% 50% 0;
  position: relative;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.marker-pin i {
  color: white;
  font-size: 14px;
  transform: rotate(45deg);
}

/* Map popup styles */
.map-popup {
  font-family: inherit;
  min-width: 200px;
}

.map-popup h6 {
  color: #007bff;
  margin-bottom: 8px;
}

.map-popup p {
  margin-bottom: 4px;
  font-size: 14px;
}

.map-popup hr {
  margin: 8px 0;
  border-color: #e9ecef;
}

.map-popup small {
  font-size: 12px;
}

/* Leaflet popup customization */
:deep(.leaflet-popup-content-wrapper) {
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

:deep(.leaflet-popup-tip) {
  background: white;
}

:deep(.leaflet-popup-close-button) {
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
}

:deep(.leaflet-popup-close-button):hover {
  color: #0056b3;
}

.form-control:focus,
.form-select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style> 