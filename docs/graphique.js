function creerGraphique(canvasId, valeurs) {

const labels = [
"Textes avec oiseaux",
"Textes botaniques (description)",
"Textes astronomiques",
"Textes avec eaux thermales",
"Textes botanique (préparation)",
"Textes seules"
];

const ctx = document.getElementById(canvasId).getContext('2d');

new Chart(ctx, {
type: 'doughnut',
data: {
labels: labels,
datasets: [{
data: valeurs,
backgroundColor: [
"#FF9342",
"#499648",
"#376A94",
"#F7D1BC",
"#794EBA",
"#FFFFFF"
],
borderWidth: 2
}]
},
options: {
plugins: {
legend: {
position: 'right',
labels: {
color: 'white',
boxWidth: 15,
padding: 15
}
}
}
}
});

}