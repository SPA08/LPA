let currentStep = 1;
const totalSteps = 5;

// Data Payload
const submissionData = {
    id: 'SIDDHU-SALE-' + Math.floor(100000 + Math.random() * 900000),
    sellerInfo: {},
    gps: null,
    photos: [],
    details: {},
    ownership: {},
    status: 'DRAFT',
    createdAt: new Date().toISOString()
};

function updateProgress() {
    for(let i=1; i<=totalSteps; i++) {
        const ind = document.getElementById(`ind-${i}`);
        if (ind) {
            if(i < currentStep) ind.className = 'step-indicator completed';
            else if(i === currentStep) ind.className = 'step-indicator active';
            else ind.className = 'step-indicator';
        }

        const step = document.getElementById(`step-${i}`);
        if (step) {
            if(i === currentStep) step.className = 'step-container active';
            else step.className = 'step-container';
        }
    }
}

function nextStep() {
    if(currentStep < totalSteps) {
        if(currentStep === 2) startCamera();
        currentStep++;
        updateProgress();
    }
}

function prevStep() {
    if(currentStep > 1) {
        if(currentStep === 3) stopCamera();
        currentStep--;
        updateProgress();
    }
}

// STEP 1: PHONE OTP / IDENTITY
function sendOTP() {
    const phone = document.getElementById('phoneNum').value.trim();
    const name = document.getElementById('fullName').value.trim();
    if(!phone || !name) {
        alert("Please enter both your Full Name and Mobile Number.");
        return;
    }
    document.getElementById('otp-section').style.display = 'block';
    document.getElementById('btnSendOtp').style.display = 'none';
}

function verifyOTP() {
    const otp = document.getElementById('otpCode').value.trim();
    const phone = document.getElementById('phoneNum').value.trim();
    const name = document.getElementById('fullName').value.trim();
    
    if(otp.length >= 4) {
        submissionData.sellerInfo = {
            name: name,
            phone: phone,
            phoneVerifiedAt: new Date().toISOString()
        };
        submissionData.status = 'PHONE_VERIFIED';
        nextStep();
    } else {
        alert("Please enter a 4-digit code (e.g. 1234).");
    }
}

// STEP 2: LIVE GPS
function captureGPS() {
    if(!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    const statusBox = document.getElementById('gpsStatus');
    statusBox.style.display = 'block';
    statusBox.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Detecting high-accuracy live GPS coordinates...';
    statusBox.style.borderColor = "var(--primary-accent)";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const acc = Math.round(position.coords.accuracy);

            submissionData.gps = {
                latitude: lat,
                longitude: lng,
                accuracyMeters: acc,
                capturedAt: new Date().toISOString()
            };
            submissionData.status = 'GPS_CAPTURED';
            
            statusBox.innerHTML = `
                <div style="color: #2e7d32; font-weight: 700; margin-bottom: 6px;">
                    <i class="fa-solid fa-circle-check"></i> Live Location Captured Successfully!
                </div>
                <div style="font-size: 13px; color: var(--text-main);">
                    <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)} <br>
                    <strong>Accuracy:</strong> ~${acc} meters <br>
                    <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" style="color: var(--primary-accent); text-decoration: underline; display: inline-block; margin-top: 4px;">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in Google Maps
                    </a>
                </div>
            `;
            statusBox.style.borderColor = "#2e7d32";
            
            const btn = document.getElementById('btnNextGps');
            if (btn) btn.disabled = false;
        },
        (error) => {
            statusBox.innerHTML = `
                <div style="color: var(--color-muted-red); font-weight: 700;">
                    <i class="fa-solid fa-triangle-exclamation"></i> Unable to capture GPS automatically.
                </div>
                <div style="font-size: 13px; color: var(--text-muted); margin-top: 4px;">
                    Please enable Location permissions in your browser or smartphone settings, then click Try Again.
                </div>
            `;
            statusBox.style.borderColor = "var(--color-muted-red)";
            
            // Allow manual continuation with fallback
            const btn = document.getElementById('btnNextGps');
            if (btn) {
                btn.disabled = false;
                btn.innerText = 'Continue with Approximate Area';
            }
        },
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
}

// STEP 3: LIVE CAMERA & PHOTO UPLOADS
let videoStream = null;

async function startCamera() {
    const video = document.getElementById('videoElement');
    if (!video) return;
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: { ideal: "environment" } },
            audio: false 
        });
        video.srcObject = videoStream;
        document.getElementById('cameraFallbackMsg').style.display = 'none';
    } catch (err) {
        console.warn("Camera stream error or restricted:", err);
        document.getElementById('cameraFallbackMsg').style.display = 'block';
    }
}

function stopCamera() {
    if(videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        videoStream = null;
    }
}

function takePhoto() {
    const video = document.getElementById('videoElement');
    if (!video || !video.videoWidth) {
        alert("Camera stream not ready. Please use the 'Snap / Upload Photo' file button below.");
        return;
    }
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    addPhotoToSlot(dataUrl);
}

function handleFileInput(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
            addPhotoToSlot(e.target.result);
        };
        reader.readAsDataURL(files[i]);
    }
}

function addPhotoToSlot(dataUrl) {
    if(submissionData.photos.length < 4) {
        submissionData.photos.push({
            id: 'IMG-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            capturedAt: new Date().toISOString(),
            data: dataUrl
        });
        
        const slotIdx = submissionData.photos.length;
        const slot = document.getElementById(`photo-${slotIdx}`);
        if (slot) {
            slot.style.backgroundImage = `url(${dataUrl})`;
            slot.classList.add('has-image');
            slot.innerHTML = `<span style="background: rgba(0,0,0,0.6); color:#fff; padding:2px 6px; border-radius:4px; font-size:11px; position:absolute; bottom:6px; left:6px;">Photo ${slotIdx} Added</span>`;
        }
        
        const nextBtn = document.getElementById('btnNextCamera');
        if (nextBtn) nextBtn.disabled = false;
    } else {
        alert("Maximum 4 photos already added. You can proceed to the next step.");
    }
}

// STEP 5: SUBMIT LISTING
function submitListing() {
    if(!document.getElementById('declaration').checked) {
        alert("Please confirm the ownership declaration.");
        return;
    }

    // Gather details
    submissionData.details = {
        locality: document.getElementById('locality').value.trim() || 'Chichawatni Local',
        type: document.getElementById('propType').value,
        size: document.getElementById('propSize').value,
        demand: document.getElementById('propDemand') ? document.getElementById('propDemand').value.trim() : 'Contact for Price',
        description: document.getElementById('propDesc') ? document.getElementById('propDesc').value.trim() : ''
    };
    
    // Gather ownership
    const docs = Array.from(document.querySelectorAll('.doc-check:checked')).map(cb => cb.value);
    submissionData.ownership = {
        ownerType: document.getElementById('ownerType').value,
        documents: docs
    };

    submissionData.status = 'SUBMITTED';

    // Store in localStorage
    try {
        let existing = JSON.parse(localStorage.getItem('siddhu_submissions') || '[]');
        existing.push(submissionData);
        localStorage.setItem('siddhu_submissions', JSON.stringify(existing));
    } catch (e) {
        console.warn("Storage quota:", e);
    }

    // Prepare WhatsApp Message
    const gpsText = submissionData.gps ? `${submissionData.gps.latitude.toFixed(5)}, ${submissionData.gps.longitude.toFixed(5)}` : 'Manual Location';
    const waText = encodeURIComponent(
        `*New Property Sale Submission - SIDDHU Property Advisor*\n\n` +
        `*Submission ID:* ${submissionData.id}\n` +
        `*Seller Name:* ${submissionData.sellerInfo.name}\n` +
        `*Phone:* ${submissionData.sellerInfo.phone}\n` +
        `*Property Type:* ${submissionData.details.type}\n` +
        `*Size:* ${submissionData.details.size}\n` +
        `*Locality:* ${submissionData.details.locality}\n` +
        `*Expected Demand:* ${submissionData.details.demand}\n` +
        `*Live GPS Coordinates:* ${gpsText}\n` +
        `*Photos Captured:* ${submissionData.photos.length} photos\n` +
        `*Documents Available:* ${docs.join(', ') || 'Under verification'}\n\n` +
        `Please review my listing for verified publication.`
    );

    // Show success UI
    document.getElementById('btnSubmit').style.display = 'none';
    document.getElementById('btnFinalBack').style.display = 'none';
    
    const resultBox = document.getElementById('submitResult');
    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <div style="text-align: center; padding: 10px 0 20px;">
            <div style="width: 56px; height: 56px; background: rgba(184, 138, 59, 0.15); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--gold-primary); font-size: 26px; margin-bottom: 12px;">
                <i class="fa-solid fa-check"></i>
            </div>
            <h3 style="color: var(--text-main); font-size: 1.4rem; font-weight: 800; margin-bottom: 6px;">Property Listing Submitted Successfully</h3>
            <p style="font-size: 14px; color: var(--text-secondary);">Your Submission Reference ID is <strong style="color: var(--gold-primary);">${submissionData.id}</strong></p>
        </div>

        <div style="background: var(--bg-secondary); padding: 18px; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 20px; font-size: 13.5px; line-height: 1.6;">
            <div><strong>Location:</strong> ${submissionData.details.locality} (${gpsText})</div>
            <div><strong>Size & Type:</strong> ${submissionData.details.size} • ${submissionData.details.type}</div>
            <div><strong>Photos:</strong> ${submissionData.photos.length} Live Images Attached</div>
            <div><strong>Verification Status:</strong> <span style="display:inline-block; padding:2px 8px; background: #e8f5e9; color: #2e7d32; border-radius: 4px; font-weight: 700; font-size: 12px;">Under Fast-Track Review</span></div>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://wa.me/923063996764?text=${waText}" target="_blank" class="btn btn-primary" style="flex: 1; min-width: 220px; text-align: center; text-decoration: none; background: #25D366; display: flex; align-items: center; justify-content: center; gap: 8px;">
                <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Send to Naeem Siddhu on WhatsApp
            </a>
            <a href="../index.html" class="btn btn-secondary" style="flex: 1; min-width: 160px; text-align: center; text-decoration: none;">
                Back to Home
            </a>
        </div>
    `;
}
