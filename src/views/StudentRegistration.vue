<template>
  <div class="student-registration">
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
              <h1 class="display-4 fw-bold mb-4">Student Registration</h1>
              <p class="lead">Join Team Mavericks - Apply Now!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Form -->
    <section class="registration-form py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="form-card p-5 shadow-lg rounded">
              <div class="text-center mb-5">
                <h2 class="fw-bold text-primary mb-3">Student Registration Form</h2>
                <p class="text-muted">Fill out the form below to apply for Team Mavericks membership</p>
              </div>

              <form @submit.prevent="submitForm" enctype="multipart/form-data">
                <!-- Personal Information -->
                <div class="form-section mb-4">
                  <h4 class="section-title mb-3">
                    <i class="fas fa-user text-primary me-2"></i>
                    Personal Information
                  </h4>
                  
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="fullName" class="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        :class="{ 'is-invalid': errors.fullName }"
                        id="fullName" 
                        v-model="formData.fullName"
                        placeholder="Enter your full name"
                        required
                      >
                      <div v-if="errors.fullName" class="invalid-feedback">
                        {{ errors.fullName }}
                      </div>
                    </div>
                    
                    <div class="col-md-6 mb-3">
                      <label for="registrationNumber" class="form-label">Registration Number *</label>
                      <input 
                        type="text" 
                        class="form-control"
                        :class="{ 'is-invalid': errors.registrationNumber }"
                        id="registrationNumber" 
                        v-model="formData.registrationNumber"
                        placeholder="e.g., 2341032"
                        required
                      >
                      <div v-if="errors.registrationNumber" class="invalid-feedback">
                        {{ errors.registrationNumber }}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="trade" class="form-label">Branch/Trade *</label>
                      <select 
                        class="form-select"
                        :class="{ 'is-invalid': errors.trade }"
                        id="trade" 
                        v-model="formData.trade"
                        required
                      >
                        <option value="">Select your branch</option>
                        <option value="GCS">Computer Science (GCS)</option>
                        <option value="GEE">Electrical Engineering (GEE)</option>
                        <option value="GME">Mechanical Engineering (GME)</option>
                        <option value="GEC">Electronics & Communication (GEC)</option>
                        <option value="GCT">Computer Technology (GCT)</option>
                        <option value="GIN">Instrumentation Engineering (GIN)</option>
                        <option value="GFT">Food Technology (GFT)</option>
                        <option value="Other">Other</option>
                      </select>
                      <div v-if="errors.trade" class="invalid-feedback">
                        {{ errors.trade }}
                      </div>
                    </div>

                    <!-- Other Branch Input - Show only when "Other" is selected -->
                    <div v-if="formData.trade === 'Other'" class="col-md-12 mb-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="otherBranchName" class="form-label">Branch Name *</label>
                          <input 
                            type="text" 
                            class="form-control"
                            :class="{ 'is-invalid': errors.otherBranchName }"
                            id="otherBranchName" 
                            v-model="formData.otherBranchName"
                            placeholder="e.g., Biotechnology Engineering"
                            required
                          >
                          <div v-if="errors.otherBranchName" class="invalid-feedback">
                            {{ errors.otherBranchName }}
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="otherBranchCode" class="form-label">Branch Code *</label>
                          <input 
                            type="text" 
                            class="form-control"
                            :class="{ 'is-invalid': errors.otherBranchCode }"
                            id="otherBranchCode" 
                            v-model="formData.otherBranchCode"
                            placeholder="e.g., GBT"
                            required
                          >
                          <div v-if="errors.otherBranchCode" class="invalid-feedback">
                            {{ errors.otherBranchCode }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 mb-3">
                      <label for="email" class="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        class="form-control"
                        :class="{ 'is-invalid': errors.email }"
                        id="email" 
                        v-model="formData.email"
                        placeholder="youremail@sliet.ac.in"
                        required
                      >
                      <div class="form-text">
                        <i class="fas fa-info-circle me-1"></i>
                        Please use your official SLIET email address (@sliet.ac.in)
                      </div>
                      <div v-if="errors.email" class="invalid-feedback">
                        {{ errors.email }}
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="phoneNumber" class="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        class="form-control"
                        :class="{ 'is-invalid': errors.phoneNumber }"
                        id="phoneNumber" 
                        v-model="formData.phoneNumber"
                        placeholder="+91 9876543210"
                        required
                      >
                      <div v-if="errors.phoneNumber" class="invalid-feedback">
                        {{ errors.phoneNumber }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Additional Information -->
                <div class="form-section mb-4">
                  <h4 class="section-title mb-3">
                    <i class="fas fa-info-circle text-primary me-2"></i>
                    Additional Information
                  </h4>

                  <div class="mb-3">
                    <label for="motivation" class="form-label">Why do you want to join Team Mavericks?</label>
                    <textarea 
                      class="form-control"
                      id="motivation" 
                      v-model="formData.motivation"
                      rows="4"
                      placeholder="Tell us about your interest in robotics and why you want to be part of our team..."
                    ></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="skills" class="form-label">Technical Skills & Experience</label>
                    <textarea 
                      class="form-control"
                      id="skills" 
                      v-model="formData.skills"
                      rows="3"
                      placeholder="List your programming languages, software tools, hardware experience, projects, etc."
                    ></textarea>
                  </div>
                </div>

                <!-- Resume Upload -->
                <div class="form-section mb-4">
                  <h4 class="section-title mb-3">
                    <i class="fas fa-file-upload text-primary me-2"></i>
                    Resume Upload
                  </h4>
                  
                  <div class="mb-3">
                    <label for="resume" class="form-label">Upload Resume (PDF only) *</label>
                    <input 
                      type="file" 
                      class="form-control"
                      :class="{ 'is-invalid': errors.resume }"
                      id="resume" 
                      @change="handleFileUpload"
                      accept=".pdf"
                      required
                    >
                    <div class="form-text">
                      <i class="fas fa-info-circle me-1"></i>
                      Please upload your resume in PDF format (max 5MB)
                    </div>
                    <div v-if="errors.resume" class="invalid-feedback">
                      {{ errors.resume }}
                    </div>
                    
                    <!-- File Preview -->
                    <div v-if="formData.resume" class="mt-2 p-2 border rounded bg-light">
                      <i class="fas fa-file-pdf text-danger me-2"></i>
                      <span>{{ formData.resume.name }}</span>
                      <button type="button" class="btn btn-sm btn-outline-danger ms-2" @click="removeFile">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Terms and Conditions -->
                <div class="form-section mb-4">
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="termsAccepted"
                      v-model="formData.termsAccepted"
                      :class="{ 'is-invalid': errors.termsAccepted }"
                      required
                    >
                    <label class="form-check-label" for="termsAccepted">
                      I agree to the <a href="#" class="text-primary">terms and conditions</a> and confirm that all information provided is accurate *
                    </label>
                    <div v-if="errors.termsAccepted" class="invalid-feedback">
                      {{ errors.termsAccepted }}
                    </div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg px-5 py-3"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <i class="fas fa-spinner fa-spin me-2"></i>
                      Submitting...
                    </span>
                    <span v-else>
                      <i class="fas fa-paper-plane me-2"></i>
                      Submit Application
                    </span>
                  </button>
                </div>
              </form>

              <!-- Success Message -->
              <div v-if="showSuccess" class="alert alert-success mt-4" role="alert">
                <div class="d-flex align-items-start">
                  <i class="fas fa-check-circle me-2 mt-1"></i>
                  <div>
                    <strong>Application Submitted Successfully!</strong>
                    <p class="mb-3">
                      Thank you for applying to Team Mavericks. We will review your application and get back to you soon.
                    </p>
                    
                    <div class="mt-3 p-3 rounded">
                      <h6 class="mb-2">
                        <i class="fab fa-whatsapp text-success me-2"></i>
                        Join Our Community
                      </h6>
                      <p class="mb-2 small">
                        While we review your application, join our WhatsApp group to stay updated with Team Mavericks activities, events, and announcements!
                      </p>
                      <a 
                        href=" https://chat.whatsapp.com/D64S9cQtZa8K3JHfrYHoW5?mode=ems_wa_t" 
                        class="btn btn-success btn-sm"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-whatsapp me-1"></i>
                        Join WhatsApp Group
                      </a>
                    </div>
                  </div>
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
import { ref, reactive } from 'vue'

export default {
  name: 'StudentRegistration',
  setup() {
    const formData = reactive({
      fullName: '',
      registrationNumber: '',
      trade: '',
      otherBranchName: '',
      otherBranchCode: '',
      email: '',
      phoneNumber: '',
      motivation: '',
      skills: '',
      resume: null,
      termsAccepted: false
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    const validateForm = () => {
      // Clear previous errors
      Object.keys(errors).forEach(key => delete errors[key])

      // Validate required fields
      if (!formData.fullName.trim()) {
        errors.fullName = 'Full name is required'
      }

      if (!formData.registrationNumber.trim()) {
        errors.registrationNumber = 'Registration number is required'
      } else if (!/^\d{7,10}$/.test(formData.registrationNumber.trim())) {
        errors.registrationNumber = 'Registration number must be 7 to 10 digits'
      }

      if (!formData.trade) {
        errors.trade = 'Please select your branch/trade'
      }

      // Validate "Other" branch fields if selected
      if (formData.trade === 'Other') {
        if (!formData.otherBranchName.trim()) {
          errors.otherBranchName = 'Branch name is required'
        }
        if (!formData.otherBranchCode.trim()) {
          errors.otherBranchCode = 'Branch code is required'
        } else if (!/^[A-Z]{2,4}$/.test(formData.otherBranchCode.trim().toUpperCase())) {
          errors.otherBranchCode = 'Branch code should be 2-4 uppercase letters (e.g., GBT)'
        }
      }

      if (!formData.email.trim()) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@sliet\.ac\.in$/.test(formData.email.trim())) {
        errors.email = 'Please enter a valid SLIET email address (@sliet.ac.in)'
      }

      if (!formData.phoneNumber.trim()) {
        errors.phoneNumber = 'Phone number is required'
      } else if (!/^(\+91|91)?[\s-]?[6-9]\d{9}$/.test(formData.phoneNumber.replace(/\s+/g, ''))) {
        errors.phoneNumber = 'Please enter a valid Indian phone number'
      }

      if (!formData.resume) {
        errors.resume = 'Resume is required'
      }

      if (!formData.termsAccepted) {
        errors.termsAccepted = 'Please accept the terms and conditions'
      }

      return Object.keys(errors).length === 0
    }

    const handleFileUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        // Validate file type
        if (file.type !== 'application/pdf') {
          errors.resume = 'Please upload a PDF file only'
          event.target.value = ''
          return
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
          errors.resume = 'File size must be less than 5MB'
          event.target.value = ''
          return
        }

        formData.resume = file
        delete errors.resume
      }
    }

    const removeFile = () => {
      formData.resume = null
      document.getElementById('resume').value = ''
    }

    const convertFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result.split(',')[1])
        reader.onerror = error => reject(error)
      })
    }

    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      try {
        // Common payload base
        const basePayload = {
          fullName: formData.fullName,
          registrationNumber: formData.registrationNumber,
          trade: formData.trade === 'Other' 
            ? `Other-${formData.otherBranchCode.toUpperCase()}-${formData.otherBranchName}`
            : formData.trade,
          // Include other branch details if "Other" is selected for reference
          ...(formData.trade === 'Other' && {
            otherBranchName: formData.otherBranchName,
            otherBranchCode: formData.otherBranchCode.toUpperCase(),
            originalTrade: 'Other'
          }),
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          motivation: formData.motivation,
          skills: formData.skills || 'Not provided',
          termsAccepted: formData.termsAccepted,
          submissionDate: new Date().toISOString(),
          timestamp: Date.now()
        }

        let resumeBase64 = null
        if (formData.resume) {
          resumeBase64 = await convertFileToBase64(formData.resume)
          basePayload.resume = {
            name: formData.resume.name,
            type: formData.resume.type,
            size: formData.resume.size,
            data: resumeBase64
          }
        }

        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwErnO1GcDr7W98i4tGK-QwxPBZWmuvWUGvugm1KHvczO8xuReXe5kw_wmWarkMfr57Bw/exec'
        console.log('[Submit] Starting submission attempts')

        // Attempt 1: JSON
        let success = false
        try {
          console.log('[Submit] Attempt 1: JSON payload', basePayload)
          const jsonResp = await fetch(scriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(basePayload)
          })
          console.log('[Submit] JSON response status:', jsonResp.status)
          
          if (jsonResp.ok || jsonResp.status === 302) {
            // 302 is normal for Google Apps Script (redirect)
            success = true
            console.log('[Submit] JSON method succeeded')
          } else {
            console.warn('[Submit] JSON attempt failed, status:', jsonResp.status)
            const responseText = await jsonResp.text().catch(() => 'Unable to read response')
            console.warn('[Submit] JSON response body:', responseText)
          }
        } catch (err) {
          console.warn('[Submit] JSON attempt error:', err.message)
        }

        // Attempt 2: URL encoded (if JSON failed)
        if (!success) {
          try {
            console.log('[Submit] Attempt 2: URL-encoded')
            const params = new URLSearchParams()
            Object.entries(basePayload).forEach(([k, v]) => {
              if (typeof v !== 'object') {
                params.append(k, String(v))
              }
            })
            if (resumeBase64 && formData.resume) {
              params.append('resume_name', formData.resume.name)
              params.append('resume_type', formData.resume.type)
              params.append('resume_size', String(formData.resume.size))
              params.append('resume_data', resumeBase64)
            }
            
            const urlResp = await fetch(scriptUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: params.toString()
            })
            console.log('[Submit] URL-encoded response status:', urlResp.status)
            
            if (urlResp.ok || urlResp.status === 302) {
              success = true
              console.log('[Submit] URL-encoded method succeeded')
            } else {
              const responseText = await urlResp.text().catch(() => 'Unable to read response')
              console.warn('[Submit] URL-encoded response body:', responseText)
            }
          } catch (err) {
            console.warn('[Submit] URL-encoded attempt error:', err.message)
          }
        }

        // Attempt 3: Multipart with no-cors (last resort)
        if (!success) {
          console.log('[Submit] Attempt 3: Multipart with no-cors fallback')
          const fd = new FormData()
          Object.entries(basePayload).forEach(([k, v]) => {
            if (typeof v !== 'object') {
              fd.append(k, String(v))
            }
          })
          if (formData.resume) {
            fd.append('resume', formData.resume)
          }
          try {
            const multipartResp = await fetch(scriptUrl, { 
              method: 'POST', 
              mode: 'no-cors',
              body: fd 
            })
            console.log('[Submit] Multipart response (no-cors mode)')
            success = true // no-cors always appears successful if no network error
          } catch (err) {
            console.error('[Submit] Multipart attempt failed:', err.message)
          }
        }

        if (!success) {
          throw new Error('All submission methods failed')
        }

        console.log('[Submit] Submission successful')
        showSuccess.value = true
        
        // Reset form
        Object.keys(formData).forEach(key => {
          if (key === 'termsAccepted') {
            formData[key] = false
          } else if (key === 'resume') {
            formData[key] = null
          } else {
            formData[key] = ''
          }
        })
        
        document.getElementById('resume').value = ''

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })

      } catch (error) {
        console.error('Error submitting form:', error)
        
        // Show error message to user
        const errorAlert = document.createElement('div')
        errorAlert.className = 'alert alert-danger mt-4'
        errorAlert.innerHTML = `
          <i class="fas fa-exclamation-circle me-2"></i>
          <strong>Submission Failed!</strong> 
          There was an error submitting your application. Please try again or contact us directly.
        `
        
        // Insert error message after the form
        const form = document.querySelector('form')
        form.parentNode.insertBefore(errorAlert, form.nextSibling)
        
        // Remove error message after 5 seconds
        setTimeout(() => {
          if (errorAlert.parentNode) {
            errorAlert.parentNode.removeChild(errorAlert)
          }
        }, 5000)
        
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formData,
      errors,
      isSubmitting,
      showSuccess,
      handleFileUpload,
      removeFile,
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

.form-card {
  background: white;
  border-radius: 20px;
  border: 1px solid #e9ecef;
}

.section-title {
  color: #343a40;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.form-control, .form-select {
  border-radius: 10px;
  border: 2px solid #e9ecef;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 8px;
}

.btn-primary {
  background: linear-gradient(45deg, #007bff, #0056b3);
  border: none;
  border-radius: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}

.btn-primary:disabled {
  transform: none;
  box-shadow: none;
}

.form-check-input:checked {
  background-color: #007bff;
  border-color: #007bff;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.alert-success {
  border-radius: 15px;
  border: none;
  background: linear-gradient(45deg, #28a745, #20c997);
  color: white;
  padding: 20px;
}

@media (max-width: 768px) {
  .form-card {
    margin: 20px;
    padding: 30px 20px !important;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>