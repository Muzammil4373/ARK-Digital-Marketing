import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { toast } from 'react-toastify';
import axios from 'axios';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import styles from './Contact.module.css';

const services = [
  'Custom Website Development',
  'Mobile Application Development',
  'ERP System Development',
  'Billing & Inventory Management',
  'CRM Solutions',
  'E-commerce Development',
  'API Development & Integration',
  'Cloud Hosting & Server Management',
  'Website Maintenance & Support',
  'Database Design & Management',
  'Custom Software Development',
  'Business Process Automation',
  'Other / Not Sure Yet',
];

const initialForm = {
  fullName: '', email: '', phone: '',
  companyName: '', serviceRequired: '', message: '',
};

const Contact = () => {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) errs.fullName = 'Enter your full name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address';
    if (!form.phone.trim() || form.phone.trim().length < 6) errs.phone = 'Enter a valid phone number';
    if (!form.serviceRequired) errs.serviceRequired = 'Please select a service';
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      setSubmitted(true);
      toast.success('Consultation request sent successfully!');
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.inner}>
        {/* Info */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className={styles.infoTitle}>Let's Build Something Great Together</h2>
          <p className={styles.infoBody}>
            Tell us about your project and we'll get back to you with a tailored plan and free
            initial consultation.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><HiMail /></div>
              <div>
                <strong>Email</strong>
                <span>info@arkdigitalmarketing.com</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><HiPhone /></div>
              <div>
                <strong>Phone</strong>
                <span>+91 XXXXXXXXXX</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}><HiLocationMarker /></div>
              <div>
                <strong>Location</strong>
                <span>India</span>
              </div>
            </div>
          </div>

          <div className={styles.guarantee}>
            <p><strong>⚡ Fast Response Guarantee</strong></p>
            <p>We respond to all consultation requests within 24 business hours.</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <h3 className={styles.formTitle}>Request a Free Consultation</h3>

              <div className={styles.row}>
                <div className={`${styles.group} ${errors.fullName ? styles.error : ''}`}>
                  <label>Full Name *</label>
                  <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Smith" />
                  {errors.fullName && <span className={styles.errMsg}>{errors.fullName}</span>}
                </div>
                <div className={`${styles.group} ${errors.email ? styles.error : ''}`}>
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" />
                  {errors.email && <span className={styles.errMsg}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.row}>
                <div className={`${styles.group} ${errors.phone ? styles.error : ''}`}>
                  <label>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                  {errors.phone && <span className={styles.errMsg}>{errors.phone}</span>}
                </div>
                <div className={styles.group}>
                  <label>Company Name</label>
                  <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Your Company Ltd." />
                </div>
              </div>

              <div className={`${styles.group} ${errors.serviceRequired ? styles.error : ''}`}>
                <label>Service Required *</label>
                <select name="serviceRequired" value={form.serviceRequired} onChange={handleChange}>
                  <option value="">— Select a service —</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
                {errors.serviceRequired && <span className={styles.errMsg}>{errors.serviceRequired}</span>}
              </div>

              <div className={`${styles.group} ${errors.message ? styles.error : ''}`}>
                <label>Project Details *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project — goals, timeline, budget, or any specific requirements..."
                />
                {errors.message && <span className={styles.errMsg}>{errors.message}</span>}
              </div>

              <button type="submit" className={`btn-primary ${styles.submit}`} disabled={loading}>
                {loading ? 'Sending...' : 'Request Consultation →'}
              </button>
            </form>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}><HiCheckCircle /></div>
              <h3>Thank You!</h3>
              <p>Your consultation request has been received. Our team will contact you within 24 business hours.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
