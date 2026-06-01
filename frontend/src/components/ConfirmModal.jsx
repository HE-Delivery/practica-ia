export default function ConfirmModal({
  open,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  isProcessing = false,
  onConfirm,
  onCancel,
}) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-3 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={onCancel}
            disabled={isProcessing}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={onConfirm}
            disabled={isProcessing}
          >
            {isProcessing ? 'Procesando...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
