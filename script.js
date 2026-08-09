const glow = document.querySelector('.cursor-glow'); window.addEventListener('pointermove', e => glow.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: 'forwards' }));
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const nav = document.querySelector('.nav'); document.querySelector('.menu').addEventListener('click', () => nav.classList.toggle('open')); document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
// Replace this with your deployed Cloudflare Worker URL. The Worker keeps the Telegram bot token private.


const CONTACT_ENDPOINT = 'https://tiny-poetry-24d4.omegat.workers.dev/';

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const button = form.querySelector('button');

    button.disabled = true;
    status.textContent = 'Sending…';

    const data = Object.fromEntries(
        new FormData(form).entries()
    );

    try {
        const response = await fetch(CONTACT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || 'Failed to send message');
        }

        form.reset();

        status.textContent =
            'Message sent successfully. Thank you!';

    } catch (error) {
        console.error('Contact form error:', error);

        status.textContent =
            'Could not send the message. Please try again or use the social links below.';

    } finally {
        button.disabled = false;
    }
});

