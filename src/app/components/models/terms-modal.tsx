"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { TermsModalProps } from "@/app/shared/interfaces/common.interface"
import CustomButton from "../button"

const TermsModal = ({ onAccept, onClose }: TermsModalProps) => {
    const [accepted, setAccepted] = useState(false)

    return (
        <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Terms and Conditions</DialogTitle>
                    <DialogDescription>Please read and accept our terms and conditions to continue.</DialogDescription>
                </DialogHeader>
                <div className="max-h-[300px] overflow-y-auto p-4 border rounded-md my-4">
                    <h3 className="font-semibold mb-2">Book Reading Terms</h3>
                    <p className="mb-4 text-sm">By accepting these terms, you acknowledge that:</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>You have spent sufficient time reading the content of this book.</li>
                        <li>You understand that your reading time has been tracked for verification purposes.</li>
                        <li>You will provide an honest acknowledgment of whether you have read and understood the content.</li>
                        <li>The system may use your reading patterns and acknowledgment for analytics and improvement purposes.</li>
                        <li>You agree to the storage of your reading data in accordance with our privacy policy.</li>
                    </ul>
                    <p className="mt-4 text-sm">
                        These terms are subject to change. By continuing to use this service, you agree to be bound by the most
                        current version of these terms.
                    </p>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <Checkbox id="terms" checked={accepted} onCheckedChange={(checked) => setAccepted(!!checked)} />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I have read and agree to the terms and conditions
                    </label>
                </div>
                <DialogFooter>
                    <CustomButton title="Cancel" variant="outline" onClick={onClose} disabled={!accepted} />
                    <CustomButton title="Accept" onClick={onAccept} disabled={!accepted} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default TermsModal;
