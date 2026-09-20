/**
 * SIDDHU Property Advisor - Interactive Local Area Intelligence Map
 * Powered by Leaflet & High-Contrast Clean Map Tiles
 */

document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("chichawatniMap");
    if (!mapContainer) return;

    const mapSection = document.getElementById("areas");
    let mapInitialized = false;
    let map = null;
    let markersLayer = null;
    const markerRegistry = {};
    let currentFilter = "all";

    // --- MARKER ICONS (Restrained Editorial Theme) ---
    const localityIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-teal"><i class="fa-solid fa-location-dot"></i></div>`,
        iconSize: [26, 26], iconAnchor: [13, 26], popupAnchor: [0, -26]
    });

    const propIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-gold"><i class="fa-solid fa-house"></i></div>`,
        iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -28]
    });

    const propRecordIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-gold"><i class="fa-solid fa-file-signature"></i></div>`,
        iconSize: [24, 24], iconAnchor: [12, 24], popupAnchor: [0, -24]
    });

    const govOfficeIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-slate"><i class="fa-solid fa-building-columns"></i></div>`,
        iconSize: [24, 24], iconAnchor: [12, 24], popupAnchor: [0, -24]
    });

    const serviceIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-slate"><i class="fa-solid fa-shield-heart"></i></div>`,
        iconSize: [24, 24], iconAnchor: [12, 24], popupAnchor: [0, -24]
    });

    const cityCenterIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin marker-pin-teal marker-center"><i class="fa-solid fa-city"></i></div>`,
        iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -30]
    });

    
    const backBtn = document.getElementById('backToListBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            document.getElementById('intelligencePanelView').style.display = 'none';
            document.getElementById('localityList').style.display = 'block';
            const filters = document.querySelector('.filter-scroll-wrapper');
            if(filters) filters.style.display = 'flex';
            const searchBox = document.getElementById('mapSearchInput');
            if (searchBox && searchBox.parentElement) searchBox.parentElement.style.display = 'flex';
            if (map) map.setView([30.5355, 72.6903], 11, { animate: true, duration: 1.0 });
        });
    }
    
    function initMap() {

        if (mapInitialized) return;
        mapInitialized = true;

        const pakistanCenter = [30.3753, 69.3451];
        map = L.map('chichawatniMap', {
            center: pakistanCenter,
            zoom: 6,
            zoomControl: false,
            scrollWheelZoom: false,
            minZoom: 5,
            maxZoom: 18
        });

        L.control.zoom({ position: 'bottomright' }).addTo(map);

        L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            attribution: '&copy; Google Maps',
            maxZoom: 19
        }).addTo(map);

        // Complete official full-body boundary of Pakistan matching user's official reference map
        const pakistanBoundary = [
            [37.0970, 74.6767], [37.0221, 74.7420], [37.0624, 74.8317], [36.9346, 74.9224],
            [37.0199, 75.1469], [36.9428, 75.4019], [36.7216, 75.4545], [36.7688, 75.6525],
            [36.6205, 75.9189], [36.2273, 76.0556], [36.0693, 75.9463], [36.0144, 76.0919],
            [35.8334, 76.1752], [35.9178, 76.5673], [35.7849, 76.5960], [35.6744, 76.7518],
            [35.5283, 77.1867], [35.4686, 77.4012], [35.5010, 77.8431],
            // Full eastern crown / Jammu & Kashmir & Gilgit-Baltistan matching user reference map
            [35.6350, 78.1800], [35.5780, 78.5800], [35.4890, 78.9200], [35.3120, 79.2500],
            [35.1050, 79.5200], [34.7820, 79.7800], [34.4500, 79.9200], [34.1800, 80.0500],
            [33.9100, 79.9200], [33.5800, 79.6200], [33.3200, 79.3800], [33.0200, 79.1500],
            [32.7400, 78.8200], [32.5500, 78.4800], [32.3800, 78.1200], [32.2600, 77.6500],
            [32.1800, 77.1500], [32.2200, 76.6200], [32.3100, 76.1200], [32.3400, 75.7200],
            [32.2900, 75.3500], [32.4800, 75.0826], [32.4931, 74.6867],
            [32.0652, 74.9143], [31.8851, 74.5991],
            [31.7229, 74.5173], [31.5008, 74.5662], [31.4600, 74.6421], [31.1385, 74.5046],
            [31.0843, 74.5658], [31.1310, 74.6766], [31.0722, 74.6832], [31.0675, 74.5584],
            [30.5294, 74.0776], [30.4630, 73.9353], [30.3686, 73.8713], [30.1857, 73.9580],
            [29.9379, 73.3914], [29.5570, 73.2713], [29.0299, 72.9438], [28.7639, 72.3847],
            [28.3580, 72.1844], [28.1269, 71.9333], [27.9574, 71.8974], [27.6984, 70.8842],
            [27.7172, 70.7577], [28.0198, 70.5626], [28.0082, 70.3662], [27.0169, 69.5132],
            [26.7401, 69.5155], [26.5922, 69.8154], [26.5506, 70.1678], [25.9443, 70.0961],
            [25.7013, 70.2796], [25.6972, 70.6660], [25.3893, 70.6742], [25.1441, 70.8943],
            [24.6806, 71.1071], [24.5413, 70.9983], [24.4422, 71.0076], [24.3929, 71.1250],
            [24.2209, 70.7258], [24.2523, 70.5743], [24.4005, 70.6119], [24.4186, 70.5601],
            [24.2907, 70.1190], [24.1651, 69.9787], [24.1751, 69.7246], [24.2778, 69.6007],
            [24.2259, 69.0005], [24.2766, 68.9472], [24.1969, 68.8784], [24.3084, 68.8264],
            [24.2841, 68.7641], [23.9620, 68.7492], [23.9946, 68.3690], [23.8504, 68.1285],
            [24.0449, 68.0529], [24.0643, 67.4099], [24.1721, 67.4507], [24.2349, 67.3574],
            [24.1901, 67.4607], [24.2407, 67.4296], [24.2718, 67.5135], [24.2901, 67.4315],
            [24.3388, 67.5121], [24.2829, 67.5190], [24.3712, 67.5321], [24.3260, 67.4243],
            [24.4226, 67.4721], [24.4590, 67.3307], [24.5379, 67.3807], [24.5757, 67.2971],
            [24.6390, 67.4446], [24.7157, 67.3788], [24.7696, 67.4299], [24.8135, 67.0837],
            [24.7476, 67.0813], [24.8704, 66.9668], [24.8418, 66.9140], [24.7846, 66.9821],
            [24.8613, 66.8540], [24.8257, 66.6646], [25.1857, 66.7465], [25.3626, 66.5493],
            [25.5118, 66.5424], [25.5974, 66.3429], [25.5490, 66.2457], [25.4910, 66.5240],
            [25.4049, 66.5215], [25.4682, 66.2851], [25.3540, 65.6407], [25.3793, 65.2701],
            [25.3035, 65.1921], [25.3199, 64.7668], [25.1546, 64.5924], [25.2635, 64.5707],
            [25.3246, 64.0912], [25.3957, 64.0710], [25.4418, 64.1787], [25.4765, 64.1204],
            [25.4035, 63.9576], [25.4088, 64.0415], [25.3262, 64.0537], [25.3682, 63.5735],
            [25.2985, 63.4507], [25.2054, 63.4951], [25.2679, 62.5310], [25.1746, 62.3468],
            [25.0940, 62.3746], [25.1040, 62.2587], [25.1776, 62.3038], [25.2199, 62.1610],
            [25.1785, 62.0604], [25.1001, 62.0940], [25.1060, 61.8965], [25.0143, 61.7790],
            [25.0310, 61.7249], [25.1696, 61.7815], [25.1904, 61.6626], [25.2549, 61.7346],
            [25.1788, 61.5779], [26.2281, 61.8479], [26.3168, 62.1211], [26.3900, 62.1324],
            [26.3584, 62.2825], [26.5244, 62.3060], [26.5681, 62.4345], [26.6473, 63.1692],
            [27.1387, 63.3175], [27.2414, 63.1842], [27.2343, 62.7830], [27.4651, 62.8554],
            [28.2771, 62.7919], [28.2551, 62.5923], [28.4097, 62.4345], [28.6402, 61.8042],
            [29.1356, 61.4158], [29.3487, 61.3726], [29.8375, 60.8994], [29.3870, 62.4008],
            [29.4764, 63.6649], [29.3616, 64.1361], [29.4619, 64.1887], [29.5718, 64.4876],
            [29.5362, 65.0670], [29.8420, 66.2665], [29.9681, 66.3619], [30.0664, 66.2382],
            [30.4353, 66.3801], [30.5384, 66.2945], [30.7865, 66.3591], [30.9358, 66.4566],
            [31.0621, 66.6968], [31.2120, 66.7303], [31.3116, 67.0131], [31.2035, 67.0618],
            [31.1823, 67.3049], [31.3276, 67.7628], [31.3999, 67.7713], [31.4007, 67.6338],
            [31.5288, 67.5540], [31.5045, 67.7296], [31.6768, 68.0535], [31.8342, 68.1689],
            [31.7140, 68.5371], [31.7503, 68.5820], [31.7632, 68.4331], [31.8280, 68.5701],
            [31.6012, 68.9006], [31.6267, 69.0210], [31.9281, 69.3176], [32.4614, 69.2407],
            [32.6638, 69.4658], [32.7691, 69.4030], [32.8664, 69.5346], [33.0180, 69.5040],
            [33.0976, 69.5801], [33.1433, 70.0231], [33.3477, 70.3420], [33.5273, 70.1959],
            [33.7265, 70.1545], [33.7668, 69.9732], [33.9340, 69.8716], [34.0225, 69.9120],
            [33.9281, 70.5010], [34.0625, 71.0763], [34.3583, 71.1713], [34.4611, 71.0068],
            [34.5548, 70.9956], [34.5805, 71.0981], [34.8788, 71.3099], [34.9591, 71.5249],
            [35.0273, 71.5881], [35.0904, 71.5358], [35.1966, 71.6872], [35.3118, 71.5669],
            [35.4405, 71.6732], [35.5753, 71.6384], [35.6179, 71.5254], [35.7207, 71.5718],
            [36.0604, 71.2272], [36.3234, 71.6184], [36.3727, 71.5749], [36.4750, 71.6520],
            [36.3994, 71.8573], [36.5055, 71.8321], [36.6647, 72.2129], [36.7535, 72.2414],
            [36.8484, 72.6316], [36.9135, 73.6935], [36.8417, 74.1197], [36.9961, 74.4205],
            [36.9603, 74.5584], [37.0970, 74.6767]
        ];

        // Create dedicated pane for waves UNDER the solid mask so waves are strictly confined to inside Pakistan
        map.createPane('wavesPane');
        map.getPane('wavesPane').style.zIndex = 350;

        // 100% Solid Inverse Mask: Completely hides all neighboring countries (India, Afghanistan, Iran, China)
        // and covers any wave that expands outside Pakistan
        const worldBounds = [
            [-90, -180],
            [-90, 180],
            [90, 180],
            [90, -180],
            [-90, -180]
        ];

        const outerRing = worldBounds.map(p => L.latLng(p[0], p[1]));
        const innerRing = pakistanBoundary.map(p => L.latLng(p[0], p[1]));

        L.polygon([outerRing, innerRing], {
            fillColor: '#F4F0E9',
            fillOpacity: 1.0, // 100% OPAQUE - covers everything outside Pakistan including waves
            stroke: false,
            interactive: false
        }).addTo(map);

        // Continuous thin dark outer border matching official silhouette
        L.polyline(pakistanBoundary, {
            color: '#1E293B',
            weight: 1.8,
            opacity: 0.95,
            lineCap: 'round',
            lineJoin: 'round',
            interactive: false
        }).addTo(map);

        // Constrain pan bounds to Pakistan region
        map.setMaxBounds(L.latLngBounds([21.0, 58.0], [38.5, 82.0]));

        // Fit map initially to full Pakistan
        map.fitBounds([[23.6, 60.5], [37.3, 80.3]], { padding: [15, 15] });

        // ===== CINEMATIC GOLD PIXEL DOT PARTICLE ANIMATION =====
        // Fine stardust / pixel particles emanating from Chichawatni and spreading across Pakistan
        class GoldParticlesEngine {
            constructor(leafletMap, originCoords) {
                this.map = leafletMap;
                this.origin = originCoords;
                this.canvas = document.createElement('canvas');
                this.canvas.className = 'pakistan-gold-particles-canvas';
                this.canvas.style.position = 'absolute';
                this.canvas.style.top = '0';
                this.canvas.style.left = '0';
                this.canvas.style.pointerEvents = 'none';
                
                // Add to wavesPane (zIndex: 350) which sits UNDER the solid Pakistan inverse mask (zIndex: 400)
                const pane = leafletMap.getPane('wavesPane') || leafletMap.getPanes().overlayPane;
                pane.appendChild(this.canvas);

                this.ctx = this.canvas.getContext('2d');
                this.particles = [];
                this.particleCount = 280;
                this.animId = null;
                this.frameCount = 0;

                this.goldColors = [
                    'rgba(218, 178, 92, ',   // Champagne Bright Gold
                    'rgba(184, 138, 59, ',   // Signature Antique Gold
                    'rgba(242, 218, 150, ',  // Soft Shimmer Gold
                    'rgba(202, 155, 69, ',   // Rich Amber Gold
                    'rgba(255, 238, 185, '   // Starlight Highlight Gold
                ];

                this.initParticles();
                this.bindEvents();
                this.resize();
                this.animate();
            }

            createParticle(randomInitialAge = false) {
                // Direction radiating in all 360 degrees across Pakistan's territory
                const angle = Math.random() * Math.PI * 2;
                
                // Gentle cinematic speed (approx 0.015 to 0.038 degrees per frame)
                const speed = 0.015 + Math.random() * 0.022;
                const maxLife = 160 + Math.floor(Math.random() * 180);

                // Aspect ratio compensation for lat/lng projection
                const vLat = Math.sin(angle) * speed;
                const vLng = Math.cos(angle) * speed * 1.15;

                // Subtle organic curvature drift
                const driftAngle = Math.random() * Math.PI * 2;
                const driftSpeed = 0.0004 + Math.random() * 0.0006;

                // Fine stardust dots: mostly 1.1px - 2.0px, with occasional 2.6px accent star
                const isAccent = Math.random() < 0.12;
                const size = isAccent ? (2.2 + Math.random() * 0.7) : (1.1 + Math.random() * 0.8);

                const p = {
                    lat: this.origin[0],
                    lng: this.origin[1],
                    vLat: vLat,
                    vLng: vLng,
                    driftAngle: driftAngle,
                    driftSpeed: driftSpeed,
                    size: size,
                    isAccent: isAccent,
                    colorBase: this.goldColors[Math.floor(Math.random() * this.goldColors.length)],
                    life: randomInitialAge ? Math.floor(Math.random() * maxLife) : 0,
                    maxLife: maxLife,
                    twinkleSpeed: 0.035 + Math.random() * 0.045,
                    twinklePhase: Math.random() * Math.PI * 2
                };

                if (randomInitialAge && p.life > 0) {
                    p.lat += p.vLat * p.life;
                    p.lng += p.vLng * p.life;
                }

                return p;
            }

            initParticles() {
                this.particles = [];
                for (let i = 0; i < this.particleCount; i++) {
                    this.particles.push(this.createParticle(true));
                }
            }

            bindEvents() {
                this.updatePosHandler = () => this.updatePosition();
                this.resizeHandler = () => this.resize();
                this.map.on('move', this.updatePosHandler);
                this.map.on('resize', this.resizeHandler);
                this.map.on('zoomend', this.updatePosHandler);
            }

            resize() {
                const size = this.map.getSize();
                const dpr = window.devicePixelRatio || 1;
                this.canvas.width = size.x * dpr;
                this.canvas.height = size.y * dpr;
                this.canvas.style.width = size.x + 'px';
                this.canvas.style.height = size.y + 'px';
                this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                this.updatePosition();
            }

            updatePosition() {
                const topLeft = this.map.containerPointToLayerPoint([0, 0]);
                L.DomUtil.setPosition(this.canvas, topLeft);
            }

            animate() {
                this.frameCount++;
                const size = this.map.getSize();
                this.ctx.clearRect(0, 0, size.x, size.y);

                const originPoint = this.map.latLngToContainerPoint(this.origin);

                // Subtle Chichawatni origin golden aura (no harsh rings, pure soft glow)
                const pulse = 0.5 + 0.5 * Math.sin(this.frameCount * 0.05);
                this.ctx.beginPath();
                this.ctx.arc(originPoint.x, originPoint.y, 3.5, 0, Math.PI * 2);
                this.ctx.fillStyle = '#B88A3B';
                this.ctx.shadowBlur = 8 + pulse * 6;
                this.ctx.shadowColor = 'rgba(218, 178, 92, ' + (0.6 + pulse * 0.3) + ')';
                this.ctx.fill();
                this.ctx.shadowBlur = 0;

                // Render all active stardust particles
                for (let i = 0; i < this.particles.length; i++) {
                    const p = this.particles[i];
                    p.life++;

                    if (p.life >= p.maxLife) {
                        this.particles[i] = this.createParticle(false);
                        continue;
                    }

                    // Gentle organic drift
                    p.lat += p.vLat + Math.sin(p.driftAngle + p.life * 0.02) * p.driftSpeed;
                    p.lng += p.vLng + Math.cos(p.driftAngle + p.life * 0.02) * p.driftSpeed;

                    const pt = this.map.latLngToContainerPoint([p.lat, p.lng]);

                    // Skip drawing if outside current screen view
                    if (pt.x < -15 || pt.x > size.x + 15 || pt.y < -15 || pt.y > size.y + 15) {
                        continue;
                    }

                    // Smooth cinematic lifecycle curve: soft fade in upon birth, subtle twinkle, soft fade out
                    const progress = p.life / p.maxLife;
                    let baseAlpha = 0;
                    if (progress < 0.12) {
                        baseAlpha = progress / 0.12;
                    } else if (progress > 0.65) {
                        baseAlpha = (1 - progress) / 0.35;
                    } else {
                        baseAlpha = 1.0;
                    }

                    // Twinkle / subtle shimmer
                    const twinkle = 0.7 + 0.3 * Math.sin(p.twinklePhase + this.frameCount * p.twinkleSpeed);
                    const alpha = Math.min(1, Math.max(0, baseAlpha * twinkle * 0.9));

                    if (alpha <= 0.02) continue;

                    this.ctx.beginPath();
                    this.ctx.arc(pt.x, pt.y, p.size, 0, Math.PI * 2);
                    this.ctx.fillStyle = p.colorBase + alpha + ')';

                    if (p.isAccent && alpha > 0.3) {
                        this.ctx.shadowBlur = 6;
                        this.ctx.shadowColor = 'rgba(218, 178, 92, ' + (alpha * 0.8) + ')';
                    }

                    this.ctx.fill();
                    this.ctx.shadowBlur = 0;
                }

                this.animId = requestAnimationFrame(() => this.animate());
            }

            destroy() {
                if (this.animId) cancelAnimationFrame(this.animId);
                this.map.off('move', this.updatePosHandler);
                this.map.off('resize', this.resizeHandler);
                this.map.off('zoomend', this.updatePosHandler);
                if (this.canvas && this.canvas.parentNode) {
                    this.canvas.parentNode.removeChild(this.canvas);
                }
            }
        }

        const chichawatniCoords = [30.5354804, 72.6903375];
        new GoldParticlesEngine(map, chichawatniCoords);

        // ===== CHICHAWATNI SUBTLE GOLD ORIGIN BEACON =====
        const beaconHtml = `
            <div class="chicha-center-beacon">
                <span class="beacon-core"></span>
                <div class="chicha-origin-tag">
                    <span class="origin-title"><i class="fa-solid fa-circle" style="font-size: 6px; color: var(--gold-primary);"></i> CHICHAWATNI</span>
                    <span class="origin-sub">Real Estate Hub &bull; Origin</span>
                </div>
            </div>
        `;

        const beaconIcon = L.divIcon({
            className: 'chicha-beacon-host',
            html: beaconHtml,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
        });

        L.marker(chichawatniCoords, {
            icon: beaconIcon,
            zIndexOffset: 3000,
            interactive: false
        }).addTo(map);

        // Floating Quick Toggle Button: View Full Pakistan / Focus Chichawatni
        const mapWrapper = document.getElementById("mapWrapper");
        if (mapWrapper && !document.getElementById("pakViewBtn")) {
            const toggleBtn = document.createElement("button");
            toggleBtn.id = "pakViewBtn";
            toggleBtn.className = "map-view-toggle-btn";
            toggleBtn.innerHTML = '<i class="fa-solid fa-earth-asia"></i> Full Pakistan View';
            toggleBtn.title = "View entire Pakistan with Chichawatni";
            toggleBtn.onclick = () => {
                map.flyToBounds([[23.6, 60.5], [37.2, 77.2]], { padding: [15, 15], duration: 1.2 });
            };
            mapWrapper.appendChild(toggleBtn);
        }

        markersLayer = L.layerGroup().addTo(map);

        // Keep Pakistan map clean (No pins on Pakistan overview, pins only when zoomed into Chichawatni >= 10)
        function updateMarkersVisibility() {
            if (!map || !markersLayer) return;
            if (map.getZoom() < 10) {
                if (map.hasLayer(markersLayer)) map.removeLayer(markersLayer);
            } else {
                if (!map.hasLayer(markersLayer)) map.addLayer(markersLayer);
            }
        }
        map.on('zoomend', updateMarkersVisibility);
        updateMarkersVisibility();

        const overlay = document.getElementById("mapLoadingOverlay");
        if (overlay) {
            overlay.style.opacity = "0";
            setTimeout(() => { if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 400);
        }

        renderIntelligenceData();
        
        // Draw 40km Service Area Circle
        L.circle([30.5355, 72.6903], {
            radius: 40000,
            color: '#B88A3B',
            weight: 2,
            fillColor: 'rgba(184, 138, 59, 0.05)',
            fillOpacity: 1,
            interactive: false
        }).addTo(map);

        setupSearchAndFilters();
        setupScrollArrows();
    }

    // Initialize map immediately on load
    initMap();

    function animateMarkerPulse(marker) {
        if (!marker) return;
        const el = marker.getElement();
        if (el) {
            el.classList.remove('marker-soft-pulse');
            void el.offsetWidth; // trigger reflow
            el.classList.add('marker-soft-pulse');
            setTimeout(() => {
                el.classList.remove('marker-soft-pulse');
            }, 3000);
        }
    }

    function renderIntelligenceData(searchQuery = "") {
        if (markersLayer) {
            markersLayer.clearLayers();
            Object.keys(markerRegistry).forEach(k => delete markerRegistry[k]);
        }
        
        const listContainer = document.getElementById("localityList");
        if (!listContainer) return;
        listContainer.innerHTML = "";

        const query = searchQuery.toLowerCase().trim();
        
        let displayCount = 0;

        function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = (lat2 - lat1) * (Math.PI / 180);
            var dLon = (lon2 - lon1) * (Math.PI / 180);
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
        }


        if (typeof DIRECTORY_DATA === 'undefined') return;

        
        DIRECTORY_DATA.forEach(item => {
            // 40km strict filter
            if (item.latitude && item.longitude) {
                const distance = getDistanceFromLatLonInKm(30.5355, 72.6903, item.latitude, item.longitude);
                if (distance > 40) return; // Strict 40km service area
            }

            let itemCategory = item.type;
            if (["PROPERTY_DEALER", "REAL_ESTATE_AGENCY"].includes(item.type)) itemCategory = "REAL_ESTATE";
            if (["HOUSE_BUILDER", "CONSTRUCTION_COMPANY", "BUILDING_MATERIAL"].includes(item.type)) itemCategory = "BUILDERS";
            if (["SCHOOL", "MOSQUE", "LANDMARK"].includes(item.type)) itemCategory = "LANDMARKS";
            if (item.type === "CITY_CENTER") itemCategory = "AREA";
            if (item.type === "PROPERTY" || item.type === "PROPERTY_REFERENCE") itemCategory = "PROPERTY";

            if (currentFilter !== "all" && itemCategory !== currentFilter) return;
            
            let matchesSearch = false;
            if (!query) {
                matchesSearch = true;
            } else {
                if (item.name.toLowerCase().includes(query)) matchesSearch = true;
                if (item.aliases && item.aliases.some(alias => alias.includes(query))) matchesSearch = true;
                if (item.parentChak && item.parentChak.toLowerCase().includes(query)) matchesSearch = true;
                if (item.address && item.address.toLowerCase().includes(query)) matchesSearch = true;
                if (item.services && item.services.toLowerCase().includes(query)) matchesSearch = true;
            }

            if (!matchesSearch) return;

            let markerObj = null;
            if (item.latitude && item.longitude) {
                let iconToUse = localityIcon;
                if (item.type === "CITY_CENTER") iconToUse = cityCenterIcon;
                else if (item.type === "PROPERTY" || item.type === "PROPERTY_REFERENCE") iconToUse = propIcon;
                else if (item.type === "PROPERTY_RECORD") iconToUse = propRecordIcon;
                else if (item.type === "GOVERNMENT_OFFICE") iconToUse = govOfficeIcon;
                else if (item.type === "PUBLIC_SERVICE") iconToUse = serviceIcon;

                const marker = L.marker([item.latitude, item.longitude], { icon: iconToUse });
                
                let legalTag = "";
                if (item.legalStatus && typeof LEGAL_STATUS !== 'undefined' && LEGAL_STATUS[item.legalStatus]) {
                    const isVerified = item.legalStatus === "APPROVED_VERIFIED";
                    legalTag = `<div class="popup-status ${isVerified ? 'verified' : 'unverified'}">
                                    <i class="fa-solid ${isVerified ? 'fa-circle-check' : 'fa-circle-info'}"></i>
                                    ${isVerified ? 'Verified' : 'Reference'}
                                </div>`;
                }

                let extraDetails = "";
                if (item.services) extraDetails += `<p class="popup-subtext">${item.services}</p>`;
                if (item.address && item.address !== "Chichawatni") extraDetails += `<p class="popup-location"><i class="fa-solid fa-location-dot"></i> ${item.address}</p>`;
                if (item.phone) extraDetails += `<p class="popup-phone"><i class="fa-solid fa-phone"></i> ${item.phone}</p>`;
                
                let typeLabel = (item.type || "").replace(/_/g, ' ');

                const popupContent = `
                    <div class="custom-map-popup">
                        <div class="popup-type-tag">${typeLabel}</div>
                        <h4 class="popup-title">${item.name}</h4>
                        ${legalTag}
                        ${extraDetails}
                    </div>
                `;

                marker.bindPopup(popupContent);
                markersLayer.addLayer(marker);
                markerObj = marker;
                markerRegistry[item.id] = marker;
                markerRegistry[item.name.toLowerCase()] = marker;
            }

            // Sidebar Row
            let iconClass = "fa-house-chimney";
            let typeLabel = item.type.replace(/_/g, ' ');
            if (item.type === "CITY_CENTER") { iconClass = "fa-city"; }
            else if (item.type === "PROPERTY") { iconClass = "fa-house"; }
            else if (item.type === "PROPERTY_RECORD") { iconClass = "fa-file-signature"; }
            else if (item.type === "GOVERNMENT_OFFICE") { iconClass = "fa-building-columns"; }
            else if (item.type === "PUBLIC_SERVICE") { iconClass = "fa-shield-heart"; }
            else if (itemCategory === "REAL_ESTATE") { iconClass = "fa-user-tie"; }
            else if (itemCategory === "BUILDERS") { iconClass = "fa-hammer"; }
            else if (itemCategory === "LANDMARKS") { iconClass = "fa-landmark"; }
            else if (item.type === "LOCAL_BUSINESS") { iconClass = "fa-store"; }
            else if (item.type === "STREET") { iconClass = "fa-road"; }
            
            const row = document.createElement("div");
            row.className = "locality-row";
            row.setAttribute("data-id", item.id);
            
            let shortNote = item.address || item.parentChak || item.services || "Chichawatni";

            row.innerHTML = `
                <div class="locality-icon">
                    <i class="fa-solid ${iconClass}"></i>
                </div>
                <div class="locality-info">
                    <div class="locality-type-badge">${typeLabel}</div>
                    <div class="locality-name">${item.name}</div>
                    <div class="locality-desc">${shortNote}</div>
                </div>
                <div class="locality-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            `;

            
            row.addEventListener("click", () => {
                document.querySelectorAll(".locality-row").forEach(el => el.classList.remove("active"));
                row.classList.add("active");

                // Intelligence Hub UI logic
                const locList = document.getElementById('localityList');
                if (locList) locList.style.display = 'none';
                const filters = document.querySelector('.filter-scroll-wrapper');
                if(filters) filters.style.display = 'none';
                const searchBox = document.getElementById('mapSearchInput');
                if (searchBox && searchBox.parentElement) searchBox.parentElement.style.display = 'none';
                
                const panel = document.getElementById('intelligencePanelView');
                if (panel) {
                    panel.style.display = 'flex';
                    document.getElementById('intelAreaTitle').innerText = item.name;
                    document.getElementById('intelAreaDesc').innerText = item.services || item.address || 'Local Chichawatni Area';
                    
                    const insightsList = document.getElementById('intelInsightsList');
                    insightsList.innerHTML = '';
                    
                    const insights = [];
                    if(item.latitude && item.longitude) {
                        const d = getDistanceFromLatLonInKm(30.5355, 72.6903, item.latitude, item.longitude).toFixed(1);
                        insights.push('<i class="fa-solid fa-location-arrow"></i> ' + d + ' km from City Center');
                    }
                    if (item.type === 'PROPERTY' || itemCategory === 'PROPERTY') {
                        insights.push('<i class="fa-solid fa-home"></i> Verified Property Listing');
                    } else if (item.type === 'CITY_CENTER' || item.type === 'AREA') {
                        insights.push('<i class="fa-solid fa-road"></i> Major Road Access');
                        insights.push('<i class="fa-solid fa-school"></i> Schools & Education Nearby');
                        insights.push('<i class="fa-solid fa-hospital"></i> Medical Access Available');
                    } else if (item.type === 'GOVERNMENT_OFFICE') {
                        insights.push('<i class="fa-solid fa-file-signature"></i> Official Record Services');
                    } else {
                        insights.push('<i class="fa-solid fa-check-circle"></i> Local Directory Verified');
                    }
                    
                    insights.forEach(ins => {
                        const li = document.createElement('li');
                        li.innerHTML = ins;
                        li.style.padding = '8px 0';
                        li.style.borderBottom = '1px solid rgba(184, 138, 59, 0.1)';
                        insightsList.appendChild(li);
                    });
                }

                if (markerObj && map) {
                    map.setView([item.latitude, item.longitude], 16, { animate: true, duration: 0.8 });
                    markerObj.openPopup();
                    animateMarkerPulse(markerObj);
                } else if (item.latitude && item.longitude && map) {
                    map.setView([item.latitude, item.longitude], 16, { animate: true, duration: 0.8 });
                }
            });

            if (markerObj) {
                markerObj.on('click', () => {
                    document.querySelectorAll(".locality-row").forEach(el => el.classList.remove("active"));
                    row.classList.add("active");
                    row.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    animateMarkerPulse(markerObj);
                });
            }

            listContainer.appendChild(row);
            displayCount++;
        });
        
        if (listContainer.innerHTML === "") {
            listContainer.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--color-muted); font-size: 0.9rem;">No matching records found.</div>`;
        }
    }

    function setupSearchAndFilters() {
        const searchInput = document.getElementById("mapSearchInput");
        const filterBtns = document.querySelectorAll(".map-filter-btn");

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                renderIntelligenceData(e.target.value);
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentFilter = btn.getAttribute("data-filter");
                
                if (searchInput) {
                    renderIntelligenceData(searchInput.value);
                } else {
                    renderIntelligenceData();
                }
            });
        });
    }

    function setupScrollArrows() {
        const wrapper = document.querySelector('.filter-scroll-wrapper');
        const container = document.querySelector('.map-filter-tags');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');

        if (!wrapper || !container || !leftArrow || !rightArrow) return;

        const updateArrows = () => {
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft > 0) {
                wrapper.classList.add('can-scroll-left');
            } else {
                wrapper.classList.remove('can-scroll-left');
            }
            if (container.scrollLeft < maxScroll - 1) {
                wrapper.classList.add('can-scroll-right');
            } else {
                wrapper.classList.remove('can-scroll-right');
            }
        };

        leftArrow.addEventListener('click', () => {
            container.scrollBy({ left: -150, behavior: 'smooth' });
        });

        rightArrow.addEventListener('click', () => {
            container.scrollBy({ left: 150, behavior: 'smooth' });
        });

        container.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        setTimeout(updateArrows, 100);
    }

    // Global synchronization helper accessible by Search and quick filters
    window.syncMapToItem = function(targetKey) {
        if (!mapInitialized) {
            initMap();
        }

        if (typeof DIRECTORY_DATA === 'undefined') return;

        const targetLower = String(targetKey).toLowerCase().trim();
        const targetClean = targetLower.replace(/[-_]+/g, ' ').trim();
        const targetSlug = targetLower.replace(/[\s\/,_]+/g, '-');

        // 1. Direct or alias match
        let item = DIRECTORY_DATA.find(d => 
            d.id === targetKey || 
            d.id === targetSlug ||
            d.name.toLowerCase() === targetLower ||
            d.name.toLowerCase() === targetClean ||
            (d.aliases && d.aliases.some(a => {
                const aLow = a.toLowerCase();
                return aLow === targetLower || aLow === targetClean || aLow === targetSlug;
            }))
        );

        // 2. Fallback partial/contains match
        if (!item) {
            item = DIRECTORY_DATA.find(d => {
                const n = d.name.toLowerCase();
                return n.includes(targetClean) || targetClean.includes(n) ||
                    (d.aliases && d.aliases.some(a => {
                        const aLow = a.toLowerCase();
                        return aLow.includes(targetClean) || targetClean.includes(aLow);
                    }));
            });
        }

        if (!item) return;

        // Reset filter to 'all' so target is rendered
        if (currentFilter !== "all") {
            currentFilter = "all";
            document.querySelectorAll(".map-filter-btn").forEach(b => {
                if (b.getAttribute("data-filter") === "all") b.classList.add("active");
                else b.classList.remove("active");
            });
            renderIntelligenceData();
        }

        // Sync map locality search input so user sees relevant items
        const searchInput = document.getElementById("mapSearchInput");
        if (searchInput) {
            searchInput.value = item.name;
            renderIntelligenceData(item.name);
        }

        const marker = markerRegistry[item.id] || (item.name ? markerRegistry[item.name.toLowerCase()] : null);
        if (marker && map) {
            map.setView([item.latitude, item.longitude], 16, { animate: true, duration: 1.0 });
            marker.openPopup();
            animateMarkerPulse(marker);
        } else if (item.latitude && item.longitude && map) {
            map.setView([item.latitude, item.longitude], 16, { animate: true, duration: 1.0 });
        }

        const row = document.querySelector(`.locality-row[data-id="${item.id}"]`);
        if (row) {
            document.querySelectorAll(".locality-row").forEach(el => el.classList.remove("active"));
            row.classList.add("active");
            row.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };
});
