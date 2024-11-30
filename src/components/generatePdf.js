import jsPDF from "jspdf";

const loadImg = (imgURL) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(img);
        img.src = imgURL;
    });
};

export const generatePdf = async (expenses) => {
	const doc = new jsPDF();

	doc.setFont("helvetica", "bold");
	doc.setFontSize(16);
	doc.text("Expense Report",105, 20, {align: 'center'});

	doc.setFontSize(12);
	doc.text("Description", 14, 30);
	doc.text("Amount", 90, 30);
	doc.text("Image", 150, 30);
	let yPosition = 40;

	for (const expense of expenses){
		doc.text(expense.description, 14, yPosition);
		doc.text(String(expense.amount), 90, yPosition);

		if (expense.image) {
			try {
				const img = await loadImg(expense.image);
				console.log("Image loaded");
				doc.addImage(img, "JPEG", 140, yPosition - 5, 50, 50);
				console.log("Image added");
			} catch (error) {
				console.log("Error loading image", error);
			}
		}
		yPosition += 60;
        console.log(yPosition);
	}
	doc.save("expense-report.pdf");
};
