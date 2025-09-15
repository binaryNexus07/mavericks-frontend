<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="/images/headline1.jpg" alt="About Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-60 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <div class="hero-badge mb-3 pt-4">
                <span class="badge bg-primary-gradient px-4 py-2 rounded-pill">
                  <i class="fas fa-robot me-2"></i>SLIET Robotics Club
                </span>
              </div>
              <h1 class="display-3 fw-bold mb-4 hero-title">
                About Team <span class="text-primary-light">Mavericks</span>
              </h1>
              <p class="lead mb-4 hero-subtitle">
                Pioneering the future of robotics and innovation at SLIET
              </p>
              <div class="hero-stats d-flex justify-content-center gap-4 mt-4">
                <div class="stat-box text-center">
                  <h3 class="fw-bold mb-1">5+</h3>
                  <small>Years</small>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-box text-center">
                  <h3 class="fw-bold mb-1">100+</h3>
                  <small>Members</small>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-box text-center">
                  <h3 class="fw-bold mb-1">50+</h3>
                  <small>Projects</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content py-5">
      <div class="container">
        <!-- Our Story Section with Enhanced Layout -->
        <div class="row align-items-center mb-5">
          <div class="col-lg-6">
            <div class="story-content">
              <h2 class="display-4 fw-bold mb-4 text-primary">Our Story</h2>
              <div class="story-highlight mb-4">
                <div class="highlight-bar"></div>
                <h4 class="fw-bold text-dark">Where Innovation Meets Excellence</h4>
              </div>
              <p class="lead text-muted mb-4">
                Team Mavericks was founded with a vision to create a platform where students can explore 
                their passion for robotics and technology. We believe in learning by doing and encourage 
                hands-on experimentation.
              </p>
              <p class="text-muted mb-4">
                Since our inception, we have been at the forefront of robotics innovation, participating 
                in various competitions and developing cutting-edge projects. Our team consists of 
                dedicated students from different branches who come together to create amazing solutions.
              </p>
              <div class="story-stats d-flex gap-4 mt-4">
                <div class="stat-item">
                  <h3 class="fw-bold text-primary mb-0">2019</h3>
                  <small class="text-muted">Founded</small>
                </div>
                <div class="stat-item">
                  <h3 class="fw-bold text-primary mb-0">100+</h3>
                  <small class="text-muted">Members</small>
                </div>
                <div class="stat-item">
                  <h3 class="fw-bold text-primary mb-0">50+</h3>
                  <small class="text-muted">Projects</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-gallery">
              <!-- Side by side images -->
              <div class="row g-3">
                <div class="col-6">
                  <div class="image-card">
                    <img src="/images/mavericks-removebg-preview.png" alt="Team Mavericks Logo" class="img-fluid rounded shadow-lg">
                    <div class="image-overlay">
                      <h6 class="text-white fw-bold">Team Mavericks</h6>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="image-card">
                    <img src="/images/sliet.jpg" alt="SLIET Campus" class="img-fluid rounded shadow-lg">
                    <div class="image-overlay">
                      <h6 class="text-white fw-bold">SLIET Campus</h6>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Main featured image -->
              <div class="row mt-3">
                <div class="col-12">
                  <div class="featured-image-card">
                    <img src="/images/team-heading.jpg" alt="Team Working Together" class="img-fluid rounded shadow-lg">
                    <div class="featured-overlay">
                      <h5 class="text-white fw-bold">Innovation in Action</h5>
                      <p class="text-white-50 mb-0">Building the future of robotics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center mb-5">
          <div class="col-lg-6 order-lg-2">
            <h2 class="display-5 fw-bold mb-4">Our Mission</h2>
            <p class="lead text-muted mb-4">
              To foster innovation, creativity, and technical excellence among students through 
              collaborative robotics projects and hands-on learning experiences.
            </p>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Promote robotics and automation technology
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Develop practical skills through project-based learning
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Encourage innovation and creative problem-solving
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Build a strong community of robotics enthusiasts
              </li>
            </ul>
          </div>
          <div class="col-lg-6 order-lg-1">
            <img src="/images/team-heading.jpg" alt="Team Working" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Our Values</h2>
            <p class="lead text-muted">The principles that guide everything we do</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(value, index) in values" :key="index">
            <div class="value-card text-center p-4 h-100">
              <div class="value-icon mb-3">
                <i :class="value.icon" class="text-primary"></i>
              </div>
              <h4 class="mb-3">{{ value.title }}</h4>
              <p class="text-muted">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="achievements-section py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Our Achievements</h2>
            <p class="lead text-muted">Milestones that define our journey</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="(achievement, index) in achievements" :key="index">
            <div class="achievement-card text-center p-4">
              <div class="achievement-number mb-3">
                <span class="display-4 fw-bold text-primary">{{ achievement.number }}</span>
              </div>
              <h5 class="mb-2">{{ achievement.title }}</h5>
              <p class="text-muted">{{ achievement.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Section -->
    <section class="faculty-section py-5 bg-light">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col-12">
            <h2 class="display-5 fw-bold mb-3">Faculty Advisors</h2>
            <p class="lead text-muted">Guiding us towards excellence</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6" v-for="(faculty, index) in facultyAdvisors" :key="index">
            <div class="faculty-card d-flex align-items-center p-4 bg-white rounded shadow-sm">
              <div class="faculty-image me-4">
                <img :src="faculty.image" :alt="faculty.name" class="rounded-circle" width="100" height="100">
              </div>
              <div class="faculty-details">
                <h5 class="mb-1">{{ faculty.name }}</h5>
                <p class="text-primary mb-2">{{ faculty.designation }}</p>
                <p class="text-muted mb-2">{{ faculty.department }}</p>
                <p class="text-muted small">{{ faculty.qualification }}</p>
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
  name: 'About',
  setup() {
    const values = [
      {
        icon: 'fas fa-lightbulb fa-3x',
        title: 'Innovation',
        description: 'We constantly push boundaries and explore new possibilities in robotics technology.'
      },
      {
        icon: 'fas fa-users fa-3x',
        title: 'Collaboration',
        description: 'We believe in the power of teamwork and collective intelligence to solve complex problems.'
      },
      {
        icon: 'fas fa-graduation-cap fa-3x',
        title: 'Learning',
        description: 'Continuous learning and skill development are at the core of everything we do.'
      },
      {
        icon: 'fas fa-trophy fa-3x',
        title: 'Excellence',
        description: 'We strive for excellence in all our projects and competitions.'
      },
      {
        icon: 'fas fa-heart fa-3x',
        title: 'Passion',
        description: 'Our passion for robotics drives us to create amazing solutions and experiences.'
      },
      {
        icon: 'fas fa-globe fa-3x',
        title: 'Impact',
        description: 'We aim to make a positive impact on society through our innovative projects.'
      }
    ]

    const achievements = [
      {
        number: '50+',
        title: 'Projects Completed',
        description: 'Successfully completed various robotics and IoT projects'
      },
      {
        number: '20+',
        title: 'Competitions Won',
        description: 'Achieved recognition in national and international competitions'
      },
      {
        number: '100+',
        title: 'Team Members',
        description: 'Active members contributing to our success'
      },
      {
        number: '5+',
        title: 'Years Experience',
        description: 'Years of experience in robotics and innovation'
      }
    ]

    const facultyAdvisors = [
      {
        name: 'Dr. J.S. Ubhi',
        designation: 'Professor',
        department: 'Electronics and Communication Engineering',
        qualification: 'Ph.D. in Electronics and Communication Engineering',
        image: '/images/Js_ubhi_sir.JPG'
      },
      {
        name: 'Prof. M.M. Sinha',
        designation: 'Dean(Student Welfare)',
        department: 'Physics',
        qualification: 'Ph.D. (Lattice Dynamics) Indian Institute of Technology, Delhi',
        image: '/images/MM Sinha.png'
      }
    ]

    return {
      values,
      achievements,
      facultyAdvisors
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 60vh;
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
  background: linear-gradient(135deg, rgba(0, 123, 230, 0.8), rgba(0, 0, 0, 0.6));
}

.hero-content {
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-badge .badge {
  font-size: 1rem;
  font-weight: 500;
}

.bg-primary-gradient {
  background: linear-gradient(45deg, #007bff, #0056b3) !important;
}

.text-primary-light {
  color: #66b3ff !important;
}

.hero-title {
  background: linear-gradient(45deg, #ffffff, #e3f2fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.hero-stats {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-flex;
}

.stat-box h3 {
  color: #66b3ff;
  font-size: 2rem;
}

.stat-box small {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
  align-self: center;
}

/* Story Section Styling */
.story-content {
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.story-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #007bff, #0056b3);
}

.story-highlight {
  position: relative;
  padding-left: 1.5rem;
}

.highlight-bar {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 40px;
  background: linear-gradient(180deg, #007bff, #0056b3);
  border-radius: 2px;
}

.story-stats {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e9ecef;
}

.stat-item {
  text-align: center;
  min-width: 80px;
}

/* Image Gallery Styling */
.image-gallery {
  padding: 1rem;
}

.image-card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 200px;
}

.image-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-card:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-card:hover .image-overlay {
  transform: translateY(0);
}

.featured-image-card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.3s ease;
  height: 250px;
}

.featured-image-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.featured-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-image-card:hover img {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 1.5rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.featured-image-card:hover .featured-overlay {
  transform: translateY(0);
  opacity: 1;
}

.value-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  height: 100%;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0, 123, 230, 0.2);
  border-color: #007bff;
}

.value-icon {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.achievement-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  height: 100%;
}

.achievement-card:hover {
  transform: translateY(-8px);
  border-color: #007bff;
  box-shadow: 0 15px 35px rgba(0, 123, 230, 0.2);
}

.achievement-number {
  position: relative;
}

.achievement-number::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #007bff, #0056b3);
  border-radius: 2px;
}

.faculty-card {
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;
  border-radius: 15px;
}

.faculty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: #007bff;
}

.faculty-image img {
  object-fit: cover;
  border: 4px solid #007bff;
  transition: border-color 0.3s ease;
}

.faculty-card:hover .faculty-image img {
  border-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .story-content {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .story-stats {
    justify-content: center;
  }
  
  .image-card {
    height: 150px;
    margin-bottom: 1rem;
  }
  
  .featured-image-card {
    height: 200px;
  }
  
  .hero-section {
    min-height: 50vh;
  }
}

/* Animation for page load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-content > .container > .row {
  animation: fadeInUp 0.6s ease-out;
}
</style> 